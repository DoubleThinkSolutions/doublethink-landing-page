'use client';

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { AUDIO_CONFIG, AudioId, AudioTrack } from '../lib/audioConfig';
import { SoundAsset } from '@/lib/sound-types';

interface AudioContextType {
  isAudioEnabled: boolean;
  isSubtitlesEnabled: boolean;
  toggleAudio: () => void;
  toggleSubtitles: () => void;
  playAmbient: (id: AudioId) => void;
  stopAmbient: () => void;
  playTriggered: (id: AudioId) => void;
  currentSubtitle: string | null;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

const getAudioSrc = (src: string | SoundAsset): string => {
  if (typeof src === 'string') return src;
  return src?.dataUri || '';
};

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [isSubtitlesEnabled, setIsSubtitlesEnabled] = useState(true);
  const [activeSounds, setActiveSounds] = useState<string[]>([]);

  // Web Audio API References
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const bufferCacheRef = useRef<Record<string, AudioBuffer>>({});

  // Active playing source nodes
  const ambientSourceRef = useRef<AudioBufferSourceNode | null>(null);
  const currentAmbientId = useRef<string | null>(null);
  const triggeredSourcesRef = useRef<Record<string, AudioBufferSourceNode[]>>({});

  // 1. Initialize AudioContext and Pre-load/Decode Buffers
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Create the global AudioContext and master GainNode
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    const ctx = new AudioContextClass();
    const masterGain = ctx.createGain();
    masterGain.connect(ctx.destination);

    audioCtxRef.current = ctx;
    gainNodeRef.current = masterGain;

    // Set initial mute state
    masterGain.gain.value = isAudioEnabled ? 1.0 : 0.0;

    // Pre-decode all audio config assets into memory
    Object.entries(AUDIO_CONFIG).forEach(async ([id, track]) => {
      try {
        const src = getAudioSrc(track.src);
        if (!src) return;

        const response = await fetch(src);
        const arrayBuffer = await response.arrayBuffer();
        
        // Decode the binary audio data into an AudioBuffer
        ctx.decodeAudioData(arrayBuffer, (buffer) => {
          bufferCacheRef.current[id] = buffer;
        }, (err) => {
          console.error(`Failed to decode audio buffer for ${id}:`, err);
        });
      } catch (err) {
        console.error(`Failed to fetch audio asset for ${id}:`, err);
      }
    });

    return () => {
      if (ctx.state !== 'closed') {
        ctx.close();
      }
    };
  }, []);

  // 2. Sync master volume node when isAudioEnabled state changes
  useEffect(() => {
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.value = isAudioEnabled ? 1.0 : 0.0;
    }
  }, [isAudioEnabled]);

  // Ensure AudioContext is resumed (Browsers require user interaction before running audio)
  const resumeContext = async () => {
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      await audioCtxRef.current.resume();
    }
  };

  const playAmbient = async (id: string) => {
    await resumeContext();
    const ctx = audioCtxRef.current;
    const masterGain = gainNodeRef.current;
    const buffer = bufferCacheRef.current[id];

    if (!ctx || !masterGain || !buffer) return;

    // If a different ambient sound is playing, stop it
    if (ambientSourceRef.current && currentAmbientId.current !== id) {
      ambientSourceRef.current.stop();
      setActiveSounds((prev) => prev.filter((sid) => sid !== currentAmbientId.current));
    }

    if (currentAmbientId.current === id && ambientSourceRef.current) return;

    currentAmbientId.current = id;

    // Create a local track gain node for track-specific volume
    const trackGain = ctx.createGain();
    trackGain.gain.value = AUDIO_CONFIG[id]?.volume ?? 1.0;

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;

    // Connect: Source -> Track Volume -> Master Volume (Speakers)
    source.connect(trackGain);
    trackGain.connect(masterGain);
    
    source.start(0);
    ambientSourceRef.current = source;

    setActiveSounds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const stopAmbient = () => {
    if (ambientSourceRef.current) {
      ambientSourceRef.current.stop();
      ambientSourceRef.current = null;
      if (currentAmbientId.current) {
        const id = currentAmbientId.current;
        setActiveSounds((prev) => prev.filter((sid) => sid !== id));
        currentAmbientId.current = null;
      }
    }
  };

  const playTriggered = async (id: AudioId) => {
    await resumeContext();
    const ctx = audioCtxRef.current;
    const masterGain = gainNodeRef.current;
    const buffer = bufferCacheRef.current[id];

    if (!ctx || !masterGain || !buffer) {
      console.warn(`Audio buffer for ${id} is not loaded yet.`);
      return;
    }

    // Stop any existing overlapping instances of this specific sound ID if desired
    if (triggeredSourcesRef.current[id]) {
      triggeredSourcesRef.current[id].forEach(src => {
        try { src.stop(); } catch(e) {}
      });
      triggeredSourcesRef.current[id] = [];
    }

    const trackGain = ctx.createGain();
    trackGain.gain.value = AUDIO_CONFIG[id]?.volume ?? 1.0;

    const source = ctx.createBufferSource();
    source.buffer = buffer;

    source.connect(trackGain);
    trackGain.connect(masterGain);

    // Track active sounds for subtitles
    setActiveSounds((prev) => (prev.includes(id) ? prev : [...prev, id]));

    source.onended = () => {
      setActiveSounds((prev) => prev.filter((sid) => sid !== id));
      // Clean up the ref array
      if (triggeredSourcesRef.current[id]) {
        triggeredSourcesRef.current[id] = triggeredSourcesRef.current[id].filter(s => s !== source);
      }
    };

    source.start(0);
    
    if (!triggeredSourcesRef.current[id]) {
      triggeredSourcesRef.current[id] = [];
    }
    triggeredSourcesRef.current[id].push(source);
  };

  // 3. Compute Subtitles (Unchanged)
  const currentSubtitle = (() => {
    if (!isSubtitlesEnabled || activeSounds.length === 0) return null;

    let highestTrack: AudioTrack | null = null;
    activeSounds.forEach((id) => {
      const track = AUDIO_CONFIG[id];
      if (track) {
        if (!highestTrack || track.priority > highestTrack.priority) {
          highestTrack = track;
        }
      }
    });

    return highestTrack ? (highestTrack as AudioTrack).subtitle : null;
  })();

  const toggleAudio = () => setIsAudioEnabled((prev) => !prev);
  const toggleSubtitles = () => setIsSubtitlesEnabled((prev) => !prev);

  return (
    <AudioContext.Provider
      value={{
        isAudioEnabled,
        isSubtitlesEnabled,
        toggleAudio,
        toggleSubtitles,
        playAmbient,
        stopAmbient,
        playTriggered,
        currentSubtitle,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) throw new Error('useAudio must be used inside AudioProvider');
  return context;
};
