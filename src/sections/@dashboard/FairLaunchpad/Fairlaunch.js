import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import './FairLaunchpad.css';
import { useForm } from '../../../context/formContext';

const Fairlaunch = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [isDisplayed1, setIsDisplayed1] = useState(false);

  const {selectedValue} = useForm()
  console.log({selectedValue})

  const handleClick = () => {
    setIsDisplayed(!isDisplayed);
  };
  const handleClick1 = () => {
    setIsDisplayed1(!isDisplayed1);
  };
  return (
    <div>
      {' '}
      <Box sx={{ minWidth: 275, padding: '1rem' }}>
        <Card variant="outlined">
          <Form className="px-3">
            <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
              <Form.Label>
                <strong>Total selling amount*</strong>
              </Form.Label>
              <Form.Control type="number" placeholder="100" />
            </Form.Group>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                {' '}
                <strong>Whitelist</strong>
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="BNB"
                name="radio-buttons-group"
              >
                <FormControlLabel value="Disable" control={<Radio />} label="Disable" />
                <FormControlLabel value="Enable" control={<Radio />} label="Enable" />
                <p style={{ color: 'blue' }}>You can enable/disable whitelist anytime.</p>
              </RadioGroup>
            </FormControl>
            <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
              <Form.Label>
                <strong>Softcap (MATIC)*</strong>
              </Form.Label>
              <Form.Control type="number" defaultValue={0} />
            </Form.Group>
            <FormGroup>
              <FormControlLabel
                required
                control={<Checkbox />}
                onClick={handleClick}
                label="Setting max contribution?"
              />
            </FormGroup>
            {isDisplayed === true ? (
              <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                <Form.Label>
                  <strong>Max Contribution (MATIC)*</strong>
                </Form.Label>
                <Form.Control type="number" defaultValue={0} />
              </Form.Group>
            ) : null}
            <FormLabel id="demo-row-radio-buttons-group-label">
              <strong>Refund type</strong>
            </FormLabel>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Refund type</InputLabel>
              <Select labelId="demo-select-small-label" id="demo-select-small" label="Refund type">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
              <Form.Label>
                <strong>liquidity (%)</strong>
              </Form.Label>
              <Form.Control type="number" defaultValue={0} />
            </Form.Group>
            <FormGroup>
              <FormControlLabel required control={<Checkbox />} onClick={handleClick1} label="Enable Buyback?" />
            </FormGroup>
            {isDisplayed1 === true ? (
              <>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                  <Form.Label>
                    <strong>Buyback Percent (%)</strong>
                  </Form.Label>
                  <Form.Control type="number" defaultValue={0} />
                </Form.Group>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item xs={6}>
                    <p>Amount Per Buyback</p>
                  </Grid>
                  <Grid sx={{ textAlign: 'right' }} item xs={6}>
                    <p>100 MATIC</p>
                  </Grid>
                  <hr />
                  <Grid item xs={6}>
                    <p>Min Buyback Delay</p>
                  </Grid>
                  <Grid sx={{ textAlign: 'right' }} item xs={6}>
                    <p>1 hours</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p>Max Buyback Delay</p>
                  </Grid>
                  <Grid sx={{ textAlign: 'right' }} item xs={6}>
                    <p>6 hours</p>
                  </Grid>
                </Grid>
              </>
            ) : null}
            <p style={{ color: 'blue', fontSize: '11px' }}>
              Enter the percentage of raised funds that should be allocated to Liquidity on (Min 51%, Max 100%)
            </p>
            <p style={{ color: 'blue', fontSize: '11px', marginBottom: '1rem' }}>
              If I spend 1 MATIC on how many tokens will I receive? Usually this amount is lower than presale rate to
              allow for a higher listing price on
            </p>
            <strong style={{ marginTop: '1rem' }}>Select start time & end time (UTC)</strong>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <strong>Start time (UTC)</strong>
                </FormLabel>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                  <Form.Control type="date" defaultValue={0} />
                </Form.Group>
              </Grid>
              <Grid item xs={6}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <strong>End time (UTC)</strong>
                </FormLabel>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                  <Form.Control type="date" defaultValue={0} />
                </Form.Group>
              </Grid>
            </Grid>
              <p style={{ color: 'blue', fontSize: '11px' }}>
                The duration between start time and end time must be less than 7 days
              </p>
            <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
              <Form.Label>
                <strong>Liquidity lockup (days)*</strong>
              </Form.Label>
              <Form.Control type="number" defaultValue={0} />
            </Form.Group>
          </Form>
        </Card>
      </Box>
    </div>
  );
};

export default Fairlaunch;
