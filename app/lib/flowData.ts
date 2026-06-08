import { StepComponent } from "./stepComponents";

export type FlowStep = {
  id: string;
  text?: string;
  componentId?: StepComponent;
  options: { label: string; target: string }[];
  optionsSide?: 'right' | 'left' | 'center';
};

export const SITE_FLOW: Record<string, FlowStep> = {
  greeting: {
    id: 'greeting',
    text: "Hello. I am Guy.",
    options: [
      { label: "Hello Guy.", target: "intro" }
    ]
  },
  intro: {
    id: 'intro',
    text: "Welcome to Doublethink, Solutions. \nI am here to guide you. What would you like to explore?",
    options: [
      { label: "Tell me about the Open Source Panopticon.", target: "osp_intro" },
      { label: "I want to contact the team.", target: "contact" }
    ]
  },
  osp_intro: {
    id: 'osp_intro',
    componentId: StepComponent.OSPINTRO,
    options: [
      { label: "Learn More", target: "osp_overview" },
    ],
  },
  osp_overview: {
    id: 'osp_overview',
    componentId: StepComponent.OSPOVERVIEW,
    options: [
      { label: "Fascinating. Show me the sensors.", target: "sensor_channels" },
      { label: "Web platform", target: "osp_web" }
    ],
  },
  sensor_channels: {
    id: 'sensor_channels',
    componentId: StepComponent.SENSORCHANNELS,
    options: [
      { label: "Web platform", target: "osp_web" }
    ],
    optionsSide: 'right',
  },
  osp_web: {
    id: 'osp_web',
    componentId: StepComponent.OSPWEB,
    options: [
      { label: "Contact the humans.", target: "contact" },
      { label: "Tell me about Doublethink Solutions.", target: "about" }
    ],
  },
  contact: {
    id: 'contact',
    componentId: StepComponent.CONTACT,
    options: [
      { label: "Tell me about Doublethink Solutions.", target: "about" },
      { label: "Tell me about the Open Source Panopticon.", target: "osp_intro" },
    ]
  },
  about: {
    id: 'about',
    componentId: StepComponent.ABOUT,
    options: [
      { label: "Get in touch", target: "contact" },
      { label: "Learn about the Open Source Panopticon", target: "osp_intro" },
      { label: "Meet the founders", target: "founders_start" },
    ],
    optionsSide: 'right'
  },
  founders_start: {
    id: 'founders_start',
    text: "Doublethink Solutions was founded by David Berlekamp and Benjamin Moen.\nWho would you like to meet first?",
    options: [
      { label: "David Berlekamp", target: "david" },
      { label: "Benjamin Moen", target: "benjamin" }
    ]
  },
  david: {
    id: 'david',
    text: "David Berlekamp is the founder of DoubleThink Solutions and dedicated husband to his wife Heather, whose contributions are woven into the work.",
    options: [
      { label: "What guides David's work?", target: "david_builds" },
    ]
  },
  david_builds: {
    id: 'david_builds',
    text: "He builds from the first principles of his own PTSD, dyslexia, and aphasia: memory that holds across time, evidence that carries its own proof, cognition that stays with the person doing the thinking.",
    options: [
      { label: "How does the company implement those principles?", target: "david_principles" },
    ]
  },
  david_principles: {
    id: 'david_principles',
    text: "The company was created to build those first principles into the core of human/technology interfaces.",
    options: [
      { label: "Meet Benjamin", target: "benjamin" },
      { label: "Get in touch", target: "contact" }
    ]
  },
  benjamin: {
    id: 'benjamin',
    text: "Benjamin Moen is a software developer pursuing a Masters in Data Science. He joined the founding team to help create impactful, transformative, and accessible software.",
    options: [
      { label: "Meet David", target: "david" },
      { label: "Learn about the Open Source Panopticon", target: "osp_intro" }
    ]
  },
};
