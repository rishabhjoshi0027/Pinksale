import Form from 'react-bootstrap/Form';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import React, { useState } from 'react';
import { useContractRead, useContract } from "@thirdweb-dev/react";
import { useForm } from '../../../context/formContext';


// Your smart contract address

const VerifyToken = () => {

// Your smart contract address
// const contractAddress = "0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39";

//   const { contract } = useContract(contractAddress);
//   const { data, isLoading, error } = useContractRead(contract, 'symbol');


//   const {selectedValue, setSelectedValue, listingOption, setListingOption} = useForm();
//   console.log('hey asdkfaslkdn') ;
//   console.log(data);
//   console.log(error)
//   console.log(isLoading)


const handleRadioChange = (event) => {
  setSelectedValue(event.target.value);
}
  
    const [token, setToken] = useState("");
    const [isvalid, setisValid] = useState(false);
    const [istokenempty, setisTokenempty] = useState(false);
  
  const handleTokenChange = (event) => {
    
    const inputToken = event.target.value;
    setToken(inputToken);
    validateToken(inputToken);
  }
  const validateToken = (inputToken) => {
    
    setisTokenempty(false);

    const regex16digits = /^0x[a-zA-Z0-9]{14}$/;
    const regex48digits = /^0x[a-zA-Z0-9]{46}$/;
  console.log(token)
    if (regex16digits.test(inputToken) || regex48digits.test(inputToken)) {
      console.log("I am valid")
      setisValid(true);
  
    }
    else {
      console.log('I am not valid')
      setisValid(false);
    }
    console.log("Is valid" , {isvalid})
  }

  const onBlurhandler = (event) => {
    console.log("i m called")

    if (token === ""){
    console.log("i m sdfsfsdf")

      setisTokenempty(true);
    }
  }


  return (
    
    <Box sx={{ minWidth: 275, padding: '1rem' }}>
      <Card variant="outlined">
        <Form className="px-3">
          <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
            <Form.Label>
              <strong >Token address</strong>
            </Form.Label>
            <Form.Control type="text" placeholder="Token address" onChange={handleTokenChange} onBlur={onBlurhandler}/>
            <div>
              {isvalid  ? (<p>Token is valid!</p>) : istokenempty ?"": (<p>Token is invalid. It should be 16 aur 48 digit long</p>)}
              {istokenempty ? (<p>Token address cannot be blank</p>) : ""}

          </div>
          {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
        </Form.Group>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            {' '}
            <strong>Currency</strong>
          </FormLabel>
          <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="" name="radio-buttons-group" onChange={handleRadioChange } value={selectedValue}>
            <FormControlLabel value="MATIC" control={<Radio />} label="MATIC" />
            <FormControlLabel value="USDT" control={<Radio />} label="USDT" />
            <FormControlLabel value="USDC" control={<Radio />} label="USDC"  />
            {/* <FormControlLabel value="USDT" control={<Radio />} label="Other" /> */}
          </RadioGroup>
        </FormControl>
        <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
          <FormLabel id="demo-radio-buttons-group-label">
            <strong>Fee Options</strong>
          </FormLabel>
          <RadioGroup

            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={`5% ${selectedValue} raised only (Recommended)`}
            name="radio-buttons-group"
          >
            <FormControlLabel
              value={`5% ${selectedValue} raised only (Recommended)`}
              control={<Radio />}
              label={`5% ${selectedValue} raised only (Recommended)`}
            />
            <FormControlLabel value="Other" control={<Radio />} label={`2% ${selectedValue} + 2% token sold`} />
          </RadioGroup>
        </Form.Group>
        <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
          <FormLabel id="demo-radio-buttons-group-label">
            <strong>Listing Options</strong>
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Auto Listing"
            name="radio-buttons-group"
            value={listingOption}
            onChange={(event) => setListingOption(event.target.value) }
          >
            <FormControlLabel value="Auto Listing" control={<Radio />} label="Auto Listing" />
            <FormControlLabel value="Manual listing" control={<Radio />} label="Manual listing" />
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
    </Box >
  )

}  

export default VerifyToken;



