import React from 'react';
import Modall from '../../../components/Modal';
import BSCButtonData from './BSCButtonData';

const BSCButton = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="dexbtn" style={{ width: '10rem' }}>
      <button onClick={handleOpen}>
        <img src="https://www.pinksale.finance/static/media/ic-bsc.419dfaf2.png" alt="" />
        BSC MAINNET
      </button>

      <Modall
        handleShow={handleOpen}
        handleClose={handleClose}
        show={open}
        heading={'Choose network'}
        body={<BSCButtonData />}
      />
    </div>
  );
};

export default BSCButton;
