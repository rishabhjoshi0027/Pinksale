import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';

const AdditionalInfo = () => {
  const [url, setUrl] = useState({ logoUrl: '', websiteUrl: '' });
  const { logoUrl, websiteUrl } = url;
  const handleOnChange = (e) => {
    setUrl({ ...url, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Box sx={{ minWidth: 275, padding: '1rem' }}>
        <Card variant="outlined">
          <Form className="px-3 py-3">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <strong>Logo URL*</strong>
                </FormLabel>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                  <Form.Control
                    name="logoUrl"
                    value={logoUrl}
                    type="text"
                    placeholder="Ex:https://.."
                    onChange={(e) => handleOnChange(e)}
                  />
                  {logoUrl === '' ? <p style={{ color: 'red', fontSize: '12px' }}>logo url cant't be empty</p> : null}
                </Form.Group>
              </Grid>
              <Grid item xs={6}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <strong>Website*</strong>
                </FormLabel>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                  <Form.Control
                    name="websiteUrl"
                    value={websiteUrl}
                    type="text"
                    onChange={(e) => handleOnChange(e)}
                    placeholder="Ex:https://.."
                  />
                  {websiteUrl === '' ? (
                    <p style={{ color: 'red', fontSize: '12px' }}>website url cant't be empty</p>
                  ) : null}
                </Form.Group>
              </Grid>
              <Grid item xs={6}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <strong>Facebook</strong>
                </FormLabel>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Ex:https://Facebook.com/.." />
                </Form.Group>
              </Grid>
              <Grid item xs={6}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <strong>Twitter</strong>
                </FormLabel>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Ex:https://Twitter.com/.." />
                </Form.Group>
              </Grid>
              <Grid item xs={6}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <strong>Github</strong>
                </FormLabel>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Ex:https://Github.com/.." />
                </Form.Group>
              </Grid>
              <Grid item xs={6}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <strong>Website</strong>
                </FormLabel>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Ex:https://Telegram.com/.." />
                </Form.Group>
              </Grid>
              <Grid item xs={6}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <strong>Instagram</strong>
                </FormLabel>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Ex:https://Instagram.com/.." />
                </Form.Group>
              </Grid>
              <Grid item xs={6}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <strong>Discord</strong>
                </FormLabel>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Ex:https://Discord.com/.." />
                </Form.Group>
              </Grid>
              <Grid item xs={12}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <strong>Reddit</strong>
                </FormLabel>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Ex:https://Reddit.com/.." />
                </Form.Group>
              </Grid>
              <Grid item xs={12}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <strong>Reddit</strong>
                </FormLabel>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Ex:https://Reddit.com/.." />
                </Form.Group>
              </Grid>
              <Grid item xs={12}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <strong>Youtube Video</strong>
                </FormLabel>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Ex:https://Youtube.com/.." />
                </Form.Group>
              </Grid>
              <Grid item xs={12}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  <strong>Description</strong>
                </FormLabel>
                <Form.Group className="mb-3 my-4" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Description" />
                </Form.Group>
              </Grid>
            </Grid>
          </Form>
        </Card>
      </Box>
    </div>
  );
};

export default AdditionalInfo;
