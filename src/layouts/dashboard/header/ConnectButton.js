import React from 'react';
import { ConnectWallet } from '@thirdweb-dev/react';
import Modall from '../../../components/Modal';
import ConntectBtnData from './ConntectBtnData';
import'./Btns.css'

const ConnectButton = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="connectbtn">
      {/* 
      <Modall
      handleShow={handleOpen}
      handleClose={handleClose}
      show={open}
      heading={'Connect to a wallet'}
      body={<ConntectBtnData />}
    /> */}
      {/* <button> */}
        <ConnectWallet />
      {/* </button> */}
    </div>
  );
};

export default ConnectButton;
