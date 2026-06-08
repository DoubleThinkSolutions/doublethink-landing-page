import AboutStep from "../components/steps/AboutStep";
import ContactStep from "../components/steps/ContactStep";
import OspIntroStep from "../components/steps/OspIntroStep";
import OspOverviewStep from "../components/steps/OspOverviewStep";
import OspWebDisplayStep from "../components/steps/OspWebDisplayStep";
import SensorChannelsStep from "../components/steps/SensorChannelStep";

export enum StepComponent {
    SENSORCHANNELS = "SensorChannels",
    OSPINTRO = "OspIntro",
    OSPOVERVIEW = "OspOverview",
    OSPWEB = "OspWeb",
    CONTACT = "Contact",
    ABOUT = "About",
}

export interface StepComponentProps {
  onAnimationComplete?: () => void;
}

export const STEP_COMPONENTS: Record<StepComponent, React.ComponentType<StepComponentProps>> = {
  [StepComponent.SENSORCHANNELS]: SensorChannelsStep,
  [StepComponent.OSPOVERVIEW]: OspOverviewStep,
  [StepComponent.OSPINTRO]: OspIntroStep,
  [StepComponent.OSPWEB]: OspWebDisplayStep,
  [StepComponent.CONTACT]: ContactStep,
  [StepComponent.ABOUT]: AboutStep,
};
