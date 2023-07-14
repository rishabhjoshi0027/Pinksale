import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Cards = ({data}) => {
  return (
    <div>
        <Box sx={{ width: '100%' }}>
        <Grid
          style={{ display: 'flex', justifyContent: 'center' }}
          container
          rowSpacing={0.5}
          columnSpacing={{ xs: 0, sm: 0, md: 0 }}
        >
          {data.map((e) => {
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
    </div>
  )
}

export default Cards