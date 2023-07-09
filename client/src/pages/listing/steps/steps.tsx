import { useCallback } from "react";

import {
  FormsContainer, 
  ButtonsContainer,
  ProgressContainer
} from './steps.styles';

import useSteps from '../../../hooks/listings/useSteps';
import { Button } from "../../../components/atoms/button/button";
import ProgressBar from "../../../components/atoms/progress_bar/progress_bar";
import { PageLayout } from "../../../components/organisms/layouts/page_layout/page_layout";
import ListingStepOne from "../step_one/step_one";
import ListingStepTwo from "../step_two/step_two";
import ListingStepThree from "../step_three/step_three";
import ListingStepFour from "../step_four/step_four";
import useStepOne from "../../../hooks/listings/useStepOne";


const IndexPage = () => {

  const {formData}= useStepOne();
  const {step, stepForward, stepBackward}= useSteps();

  const FormProgress = useCallback(
    (
      {firstStep, secondStep, thirdStep}:
      {firstStep: number, secondStep: number, thirdStep: number}
    ) => (
      <ProgressContainer>
        <ProgressBar progress={firstStep} />
        <ProgressBar progress={secondStep} />
        <ProgressBar progress={thirdStep} />
      </ProgressContainer>
    ), 
  []);

  const Buttons = useCallback((
    {hasBack, backwardStep, forwardStep} : 
    {hasBack: boolean, backwardStep: number, forwardStep:number }
  ) => (
    <ButtonsContainer>
      {
        hasBack && (
          <Button  
            text="Back"
            icon="../images/icons/back-black.svg"
            isRound={true}
            onClick={() => stepBackward(backwardStep)} 
            iconPosition="start"
          />
        )
      }
      <Button  
        bg="black"
        text="Next"
        icon="../images/icons/next.svg"
        color="white"
        isRound={true}
        iconPosition="end"
        onClick={() => {
          console.log(formData);
          stepForward(forwardStep);
        }} 
      />
    </ButtonsContainer>
  ), []);

  const RenderSteps = useCallback(() => (
    <FormsContainer>
      { step === 1 ? (
          <>
            <ListingStepOne />
            <FormProgress firstStep={0} secondStep={0}  thirdStep={0}/>
            <Buttons hasBack={false}  backwardStep={0} forwardStep={2}  />
          </>
        ) : step === 2 ? (
          <>
            <ListingStepTwo />
            <FormProgress firstStep={100} secondStep={0}  thirdStep={0}/>
            <Buttons hasBack={true}  backwardStep={1} forwardStep={3}  />
          </>
        ) : step === 3 ? (
          <>
            <ListingStepThree />
            <FormProgress firstStep={100} secondStep={50}  thirdStep={0}/>
            <Buttons hasBack={true} backwardStep={2} forwardStep={4}  />
          </>
        ) : step === 4 ? (
          <>
            <ListingStepFour />
            <FormProgress firstStep={100} secondStep={100}  thirdStep={50}/>
            <Buttons hasBack={true} backwardStep={3} forwardStep={4}  />
          </>
        ): ''
      }
      <ProgressContainer>
      </ProgressContainer>
    </FormsContainer>
  ), [Buttons, step, stepForward])

  return (
    <PageLayout>
      <RenderSteps />
    </PageLayout>
  );
};

export default IndexPage;
