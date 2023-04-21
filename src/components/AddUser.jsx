
import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function AddUser() {

  const [userdetails, setUserdetails]=useState({
    "name":"",
    "email":"",
    "phone":"",
    "password":""
  });
  const onChangeUser=(e)=>{
    e.preventDefault();
    const {name,value} = e.target;
    setUserdetails({...userdetails,[name]:value});
    console.log(userdetails)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("User added");
    try {
      const response = await axios.post('http://localhost:5000/add/user', userdetails);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Add New User
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="name"
                  name="name"
                  autoComplete="name"
                  value={userdetails.name}
                  onChange={onChangeUser}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={userdetails.email}
                  onChange={onChangeUser}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phone"
                  value={userdetails.phone}
                  onChange={onChangeUser}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={userdetails.password}
                  onChange={onChangeUser}
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Add user
            </Button>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
