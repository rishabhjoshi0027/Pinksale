import React from 'react';
import Form from 'react-bootstrap/Form';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// import { Token } from '@thirdweb-dev/sdk';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

const VerifyTokenForm = () => {
  return (
    <Box sx={{ minWidth: 275, padding: '1rem' }}>
      <Card variant="outlined">
        <Form className="px-3">
          <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
            <Form.Label>
              <strong>Token address</strong>
            </Form.Label>
            <Form.Control type="text" placeholder="Token address" value=''/>
            {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
          </Form.Group>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              {' '}
              <strong>Currency</strong>
            </FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="BNB" name="radio-buttons-group">
              <FormControlLabel value="BNB" control={<Radio />} label="MATIC" />
              <FormControlLabel value="BUSD" control={<Radio />} label="USDT" />
              <FormControlLabel value="USDC" control={<Radio />} label="USDC" />
              {/* <FormControlLabel value="USDT" control={<Radio />} label="Other" /> */}
            </RadioGroup>
          </FormControl>
          <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
            <FormLabel id="demo-radio-buttons-group-label">
              <strong>Fee Options</strong>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="5% MATIC raised only (Recommended)"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="5% MATIC raised only (Recommended)"
                control={<Radio />}
                label="5% MATIC  raised only (Recommended)"
              />
              <FormControlLabel value="Other" control={<Radio />} label="Other" />
            </RadioGroup>
          </Form.Group>

          <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
            <FormLabel id="demo-radio-buttons-group-label">
              <strong>Affiliate Program</strong>
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Disable Affiliate"
              name="radio-buttons-group"
            >
              <FormControlLabel value="Disable Affiliate" control={<Radio />} label="Disable Affiliate" />
              <FormControlLabel value="Enable Affiliate" control={<Radio />} label="Enable Affiliate" />
            </RadioGroup>
          </Form.Group>
        </Form>
      </Card>
    </Box>
  );
};

export default VerifyTokenForm;
