import { useCallback } from "react";

import {
  FormsContainer, 
  ButtonsContainer,
  ProgressContainer
} from './steps.styles';

import { Button } from "../../../components/atoms/button/button";
import ProgressBar from "../../../components/atoms/progress_bar/progress_bar";
import { PageLayout } from "../../../components/organisms/layouts/page_layout/page_layout";

import Intro from '../intro/intro';
import ListingStepOne from "../step_one/step_one";
import ListingStepTwo from "../step_two/step_two";
import ListingStepFour from "../step_four/step_four";
import ListingStepThree from "../step_three/step_three";

import { selectActiveStep } from '../../../redux/forms/listing/steps/steps.selector';
import { stepForward, stepBackward } from '../../../redux/forms/listing/steps/steps.slice';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux/index'

const IndexPage = () => {

  const dispatch = useAppDispatch()
  const activeStep = useAppSelector(selectActiveStep);

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

  const Buttons = useCallback(( {hasBack} : {hasBack: boolean, } ) => (
    <ButtonsContainer>
      {
        hasBack && (
          <Button  
            text="Back"
            icon="../images/icons/back-black.svg"
            isRound={true}
            onClick={() => dispatch(stepBackward())} 
            iconPosition="start"
          />
        )
      }
      <Button  
        bg="black"
        text="Next"
        type="submit"
        icon="../images/icons/next.svg"
        color="white"
        isRound={true}
        iconPosition="end" 
      />
    </ButtonsContainer>
  ), []);

  const RenderSteps = useCallback(() => (
    <FormsContainer>
      { activeStep === 0 ? (
          <Intro />
        ) 
        : activeStep === 1 ? (
          <ListingStepOne handleFromSubmition={() => dispatch(stepForward())}>
            <FormProgress firstStep={0} secondStep={0}  thirdStep={0}/>
            <Buttons hasBack={false} />
          </ListingStepOne>
        )
         : activeStep === 2  ? (
          <ListingStepTwo handleFromSubmition={() => dispatch(stepForward())}>
            <FormProgress firstStep={100} secondStep={0}  thirdStep={0}/>
            <Buttons hasBack={true} />
          </ListingStepTwo>
        ) : activeStep === 3 ? (
          <ListingStepThree handleFromSubmition={() => dispatch(stepForward())}>
            <FormProgress firstStep={100} secondStep={50}  thirdStep={0}/>
            <Buttons hasBack={true} />
          </ListingStepThree>
        ) : activeStep === 4 ? (
          <ListingStepFour handleFromSubmition={() => dispatch(stepForward())}>
            <FormProgress firstStep={100} secondStep={100}  thirdStep={50}/>
            <Buttons hasBack={true} />
          </ListingStepFour>
        ): ''
      }
      <ProgressContainer>
      </ProgressContainer>
    </FormsContainer>
  ), [Buttons, activeStep, stepForward])


  return (
    <PageLayout>
      <RenderSteps />
    </PageLayout>
  );
};

export default IndexPage;
