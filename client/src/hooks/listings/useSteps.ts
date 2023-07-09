import { useState } from 'react';

const  useStepOne = () => {
  const [step, setStep] = useState(1)

  const stepForward = (activeStep: number) => {
    setStep(activeStep)
  };

  const stepBackward = (activeStep: number) => {
    setStep(activeStep)
  };

  return { 
    step,
    stepForward,
    stepBackward
  };
}

export default useStepOne