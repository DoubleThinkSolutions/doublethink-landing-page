'use client';

import { Volume2, VolumeX, ClosedCaption } from 'lucide-react';
import { useAudio } from '../context/AudioContext';
import { motion, AnimatePresence } from 'framer-motion';
import { AudioId } from '../lib/audioConfig';

export function SubtitleDisplay() {
  const { currentSubtitle } = useAudio();

  return (
    <div className="absolute top-6 left-20 z-50 pointer-events-none min-h-10">
      <AnimatePresence mode="wait">
        {currentSubtitle && (
          <motion.div
            key={currentSubtitle}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-black/70 text-gray-200 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide shadow-md uppercase backdrop-blur-sm"
          >
            {currentSubtitle}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function AudioControls() {
  const { isAudioEnabled, isSubtitlesEnabled, toggleAudio, toggleSubtitles, playTriggered } = useAudio();

  const baseButtonStyles = "p-3 rounded-full border backdrop-blur-md transition-colors shadow-lg";

  return (
    <div className="absolute top-6 right-6 z-50 flex items-center gap-3">
      {/* Subtitle Toggle Button */}
      <button
        onClick={() => {
            toggleSubtitles();
            playTriggered(AudioId.CLICK);
        }}
        className={`${baseButtonStyles} ${
          isSubtitlesEnabled 
            ? 'border-zinc-400 bg-zinc-100/80 text-zinc-900' 
            : 'border-zinc-300 bg-white/70 text-zinc-400 hover:bg-zinc-100'
        }`}
        title="Toggle Subtitles"
        aria-label="Toggle Subtitles"
      >
        <ClosedCaption className="h-5 w-5" strokeWidth={2} />
      </button>

      {/* Audio Toggle Button */}
      <button
        onClick={() => {
            toggleAudio();
            playTriggered(AudioId.CLICK);
        }}
        className={`${baseButtonStyles} ${
          isAudioEnabled 
            ? 'border-zinc-400 bg-zinc-100/80 text-zinc-900' 
            : 'border-zinc-300 bg-white/70 text-zinc-400 hover:bg-zinc-100'
        }`}
        title="Toggle Sound"
        aria-label="Toggle Sound"
      >
        {isAudioEnabled ? (
          <Volume2 className="h-5 w-5" strokeWidth={2} />
        ) : (
          <VolumeX className="h-5 w-5" strokeWidth={2} />
        )}
      </button>
    </div>
  );
}
