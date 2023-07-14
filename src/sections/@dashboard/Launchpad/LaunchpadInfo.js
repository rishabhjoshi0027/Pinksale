import React, { Component, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import {useForm} from '../../../context/formContext';


// export class UserForm extends Component{
//   state = {
//     softCap: '',
//     hardCap: '',
//     perSaleRate: '',
//     minimumBuy: '',
//     maximumBuy: '',
//     liquidity: '',
//     listingRate: '',
//     liquidityLockup: '',
//     startDate: '',
//     endDate: '',
//   }
// }
// handleChange = input => e => {
//   this.setState({[input]: e.target.value})
// }

const LaunchpadInfo = ({ chngeVal }) => {
  const { refundType, setRefundType, infoData, setInfoData, listingOption, setlistingOption} = useForm()

  const [routerSelect, setRouterSelect] = useState();
  const {
    perSaleRate,
    softCap,
    hardCap,
    minimumBuy,
    maximumBuy,
    liquidity,
    listingRate,
    liquidityLockup,
    startDate,
    endDate,
  } = infoData;
  function handleOnChange(e) {
 
     setInfoData({ ...infoData, [e.target.name]: e.target.value });

    console.log(infoData);
  }
  function handleSelect(e) {
    console.log();
    setRefundType(e.target.value);
  }
  function handleRouterSelect(e) {
    console.log(e.target.value);
    const data = {
      routerSelect: e.target.value,
    };
    console.log(data);
    setRouterSelect(data);
  }
  
  const isAutoListing = listingOption === 'Auto Listing'

  console.log({isAutoListing, listingOption})
  return (
    <div>
      <Box sx={{ minWidth: 275, padding: '1rem' }}>
        <Card variant="outlined">
          {' '}
          <Form className="px-3 py-3">
            <FormLabel id="demo-row-radio-buttons-group-label">
              <strong>Presale rate*</strong>
            </FormLabel>
            <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
              <Form.Control
                name="perSaleRate"
                value={perSaleRate}
                onChange={(e) => handleOnChange(e)}
                type="number"
                defaultValue={0}
                required
              />
            </Form.Group>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                <strong>Whitelist</strong>
              </FormLabel>
              <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                <FormControlLabel value="Disable" control={<Radio />} label="Disable" />
                <FormControlLabel value="Enable" control={<Radio />} label="Enable" />
              </RadioGroup>
            </FormControl>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <strong>Softcap (MATIC)*</strong>
                </FormLabel>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                  <Form.Control
                    name="softCap"
                    value={softCap}
                    onChange={(e) => handleOnChange(e)}
                    type="number"
                    defaultValue={0}
                    min={0}
                  />

                  {softCap > hardCap ? (
                    <p style={{ color: 'red', fontSize: '12px' }}>Softcap must be less than or equal Hardcap </p>
                  ) : null}
                  {/* {softCap > hardCap ? setCondition1(1) : setCondition1(0)} */}
                </Form.Group>
              </Grid>
              <Grid item xs={6}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <strong>HardCap (MATIC)*</strong>
                </FormLabel>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                  <Form.Control
                    name="hardCap"
                    value={hardCap}
                    onChange={(e) => handleOnChange(e)}
                    type="number"
                    defaultValue={0}
                    min={0}
                  />
                </Form.Group>
              </Grid>
              <Grid item xs={6}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <strong>Minimum buy (MATIC)*</strong>
                </FormLabel>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                  <Form.Control
                    name="minimumBuy"
                    value={minimumBuy}
                    onChange={(e) => handleOnChange(e)}
                    type="number"
                    defaultValue={0}
                  />
                  {minimumBuy > maximumBuy ? (
                    <p style={{ color: 'red', fontSize: '12px' }}>Min buy must be less than max buy</p>
                  ) : null}
                  {/* {   condition[1] = minimumBuy > maximumBuy ? 1: 0 }  */}
                </Form.Group>
              </Grid>
              <Grid item xs={6}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <strong>Maximum buy (MATIC)*</strong>
                </FormLabel>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                  <Form.Control
                    name="maximumBuy"
                    value={maximumBuy}
                    onChange={(e) => handleOnChange(e)}
                    type="number"
                    defaultValue={0}
                  />
                </Form.Group>
              </Grid>
              <Grid item xs={6}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <strong>Refund type</strong>
                </FormLabel>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  {/* <InputLabel id="demo-select-small-label">Refund type</InputLabel> */}
                  <Select labelId="demo-select-small-label" id="demo-select-small" onChange={(e) => handleSelect(e)}>
                    <MenuItem value="Burn">Burn</MenuItem>
                    <MenuItem value="Refund">Refund</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
         {isAutoListing &&  <Grid item xs={6}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <strong>Router*</strong>
                </FormLabel>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  {/* <InputLabel id="demo-select-small-label">Router</InputLabel> */}
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    onChange={(e) => handleRouterSelect(e)}
                  >
                    <MenuItem>
                      <em>-----Select Router Exchange-----</em>
                    </MenuItem>
                    <MenuItem value="Uniswap">Uniswap</MenuItem>
                  </Select>
                </FormControl>
              </Grid>}
              {isAutoListing && <Grid item xs={6}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <strong>liquidity (%)*</strong>
                </FormLabel>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                  <Form.Control
                    name="liquidity"
                    value={liquidity}
                    onChange={(e) => handleOnChange(e)}
                    type="number"
                    defaultValue={0}
                  />
                  {liquidity <= 50 ? <p style={{ color: 'red', fontSize: '12px' }}>Liquidity must be greater than 50%</p> : null}
                  {/* {   condition[2] = liquidity <= 50 ? 1: 0 }  */}
                </Form.Group>
              </Grid>}
             {isAutoListing && <Grid item xs={6}C>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <strong>listing rate*</strong>
                </FormLabel>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                  <Form.Control
                    name="listingRate"
                    value={listingRate}
                    onChange={(e) => handleOnChange(e)}
                    type="number"
                    defaultValue={0}
                  />
                </Form.Group>
              </Grid>}
              <Grid item xs={6}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <strong>Start time (UTC)</strong>
                </FormLabel>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                  <Form.Control
                    type="datetime-local"
                    name="startDate"
                    value={startDate}
                    onChange={(e) => handleOnChange(e)}
                  />
                  {startDate >= endDate ? <p style={{ color: 'red', fontSize: '12px' }}>Start time needs to be before End time</p> : null}
                  {/* {   condition[3] = startDate >= endDate  ? 1: 0 }  */}
                </Form.Group>
              </Grid>
              <Grid item xs={6}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <strong>End time (UTC)</strong>
                </FormLabel>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                  <Form.Control
                    name="endDate"
                    value={endDate}
                    type="datetime-local"
                    defaultValue={0}
                    onChange={(e) => handleOnChange(e)}
                  />
                </Form.Group>
              </Grid>
            </Grid>
            {isAutoListing && <Grid item xs={6}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              <strong>Liquidity lockup (days)*</strong>
            </FormLabel>
            <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
              <Form.Control
                name="liquidityLockup"
                value={liquidityLockup}
                onChange={(e) => handleOnChange(e)}
                type="number"
                defaultValue={0}
              />
              {liquidityLockup < 30 ? <p style={{ color: 'red', fontSize: '12px' }}>liquidityLockTime must be greater than or equal to 30</p> : null}
              {/* {condition[4] = liquidityLockup < 30 ? 1: 0 }  */}
              <Grid/>
              
            </Form.Group>
            </Grid>}
            
          </Form>
        </Card>
      </Box>
    </div>
  );
};

export default LaunchpadInfo;
