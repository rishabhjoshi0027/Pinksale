import React from 'react';
import HorizontalLinearStepper from '../../../components/Stepper/Stepper';
import './FairLaunchpad.css';
import AddAdditionalInfo from './AddAdditionalInfo';
import Fairlaunch from './Fairlaunch';
import FinishFair from './FinishFair';
import VerifyTokenForm from './VerifyTokenForm';

const CreateFairLaunchpad = () => {
  const steps = ['Verify Token', 'DeFi Fairlaunch Info ', 'Add Additional Info', 'Finish'];

  return (
    <>
      <HorizontalLinearStepper
        steps={steps}
        Child={[<VerifyTokenForm />, <Fairlaunch />, <AddAdditionalInfo />, <FinishFair />]}
      />
    </>
  );
};

export default CreateFairLaunchpad;
