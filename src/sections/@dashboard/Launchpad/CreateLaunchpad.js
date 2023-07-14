import React, { useState } from 'react';
// import { FormControl } from '@mui/material';
import HorizontalLinearStepper from '../../../components/Stepper/Stepper';
import './launchpad.css';
import VerifyToken from './VerifyToken';
import LaunchpadInfo from './LaunchpadInfo';
import AdditionalInfo from './AdditionalInfo';
import Finish from './Finish';

const CreateLaunchpad = () => {
  const [isValidate, setIsValidate] = useState(0);
  const changeVal = () => {
    setIsValidate(1);
    console.log(isValidate);
  };

  const steps = ['Verify Token', 'DeFi Launchpad Info ', 'Add Additional Info', 'Finish Review your information'];

  return (
    <HorizontalLinearStepper
      steps={steps}
      Child={[<VerifyToken />, <LaunchpadInfo chngeVal={changeVal} />, <AdditionalInfo />, <Finish />]}
    />
  );
};

export default CreateLaunchpad;
