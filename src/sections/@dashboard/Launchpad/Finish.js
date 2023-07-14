import React from 'react';
import Grid from '@mui/material/Grid';
import Form from 'react-bootstrap/Form';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import {useForm} from '../../../context/formContext'



const Finish = () => {

  const context = useForm();
  const infoData = context.infoData
  console.log(context.perSaleRate);

  return (
    <div>
      
      <Box sx={{ minWidth: 275, padding: '1rem' }}>
        <Card variant="outlined">
          <Form className="px-3 py-3">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                <li>Total Token</li>
              </Grid>
              <Grid sx={{textAlign: 'right'}} item xs={6}>
                <li style={{listStyle: 'none'}}>{infoData.softCap * infoData.hardCap}</li>
              </Grid>
              <Grid item xs={6}>
                <li>SoftCap: </li>
              </Grid>
              <Grid sx={{textAlign: 'right'}} item xs={6}>
              <li style={{listStyle: 'none'}}>{infoData.softCap}</li>
              </Grid>
              <Grid item xs={6}>
                <li>HardCap: </li>
              </Grid>
              <Grid sx={{textAlign: 'right'}} item xs={6}>
              <li style={{listStyle: 'none'}}>{infoData.hardCap}</li>
              </Grid>
              <Grid item xs={6}>
                <li >PreSale Rate:</li>
              </Grid>
              <Grid sx={{textAlign: 'right'}} item xs={6}>
                <li style={{listStyle: 'none'}}>{infoData.perSaleRate}</li>
              </Grid>
              <Grid item xs={6}>
                <li>Minimum buy: </li>
              </Grid>
              <Grid sx={{textAlign: 'right'}} item xs={6}>
              <li style={{listStyle: 'none'}}>{infoData.minimumBuy}</li>
              </Grid>
              <Grid item xs={6}>
                <li>Maximum Buy: </li>
              </Grid>
              <Grid sx={{textAlign: 'right'}} item xs={6}>
              <li style={{listStyle: 'none'}}>{infoData.maximumBuy}</li>
              </Grid>
              <Grid item xs={6}>
                <li>Start Time: </li>
              </Grid>
              <Grid sx={{textAlign: 'right'}} item xs={6}>
              <li style={{listStyle: 'none'}}>{infoData.startDate}</li>        
              </Grid>
              <Grid item xs={6}>
                <li>End Time:  </li>
              </Grid>
              <Grid sx={{textAlign: 'right'}} item xs={6}>
              <li style={{listStyle: 'none'}}>{infoData.endDate}</li>        
                    </Grid>
            </Grid>
          </Form>
        </Card>
      </Box>
    </div>
  );
};

export default Finish;
