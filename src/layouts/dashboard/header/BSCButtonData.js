import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './Btns.css';
import Cards from '../../../components/Cards/Cards';

const BSCButtonData = () => {
  const data = [
    {
      name: 'Ethereum',
      img: 'https://www.pinksale.finance/static/media/ic-eth.9270fc02.svg',
    },
    {
      name: 'BNB Smart Chain',
      img: 'https://www.pinksale.finance/static/media/ic-bsc.419dfaf2.png',
    },
    {
      name: 'Matic(Polygon)',
      img: 'https://www.pinksale.finance/static/media/ic-matic.910e1faf.png',
    },
    {
      name: 'Avalanche',
      img: 'https://www.pinksale.finance/static/media/ic-avax.234db155.svg',
    },
    {
      name: 'Fantom Opera',
      img: 'https://www.pinksale.finance/static/media/ic-fantom.306f76f9.svg',
    },
    {
      name: 'Cronos',
      img: 'https://www.pinksale.finance/static/media/ic-cronos.5a2dbab3.svg',
    },
    {
      name: 'DogeChain',
      img: 'https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/XSWLUMNQHVDAJIWOGSX5T7L724.png',
    },
    {
      name: 'Alvey',
      img: 'https://www.pinksale.finance/static/media/ic-alvey.d30c8b73.svg',
    },
    {
      name: 'Arbitrum',
      img: 'https://www.pinksale.finance/static/media/ic-arbitrum.10a7db75.svg',
    },
    {
      name: 'PulseChain',
      img: 'https://www.pinksale.finance/static/media/ic-pulsechain.5ff7a9ba.png',
    },
  ];
  const data2 = [
    {
      name: 'BNB Smart Chain',
      img: 'https://www.pinksale.finance/static/media/ic-bsc.419dfaf2.png',
    },
    {
      name: 'Matic(Mumbai)',
      img: 'https://www.pinksale.finance/static/media/ic-matic.910e1faf.png',
    },
  ];
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Cards data={data}/>
        <p className="bottomP">TESTNET</p>
        <Grid
          style={{ display: 'flex', justifyContent: 'center' }}
          container
          rowSpacing={0.5}
          columnSpacing={{ xs: 0, sm: 0, md: 0 }}
        >
          {data2.map((e) => {
            return (
              <Grid style={{ display: 'flex', justifyContent: 'center' }} item xs={6}>
                <div className="modalBody">
                  <div className="modalBodyImg">
                    <img src={e.img} alt="" />
                  </div>
                  <h6 style={{ marginBottom: '0', padding: '6px' }}>{e.name}</h6>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default BSCButtonData;
