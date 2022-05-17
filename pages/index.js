import { useState } from 'react';
import { 
  Container,
  Box,
  Button,
  Typography,
  Divider,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Alert
 } from '@mui/material'

import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Link from 'next/link';
// firebase functions
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function Home() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [checked,setChecked] = useState(false);
  const [error,setError] = useState("");
  const [success,setSuccess] = useState("");

  const handleEmailChange = (e) => {
      setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
      setPassword(e.target.value);
  }

  const handleChecked = e => {
    setChecked(!checked);
  }

  const handleSubmit = e => {
      e.preventDefault()
      const auth = getAuth();

    if(checked){
      createUserWithEmailAndPassword(auth,email,password)
      .then(cred => {
          console.log(cred.user);
          setError('');
          setSuccess('User created successfully, redirecting to homepage in 3 seconds...');
      })
      .catch(err => {
          console.log(err.message);
      })
    } else {
        setError('Please accept the terms and conditions');
    }
  }
  return (
    <Container
    maxWidth="md"
    sx={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      height: "100vh",
    }}
    >
      <Box
      sx={{
        border: '1px solid grey',
        padding : '20px',
        borderRadius : '5px',
        width: '80%',
        textAlign: 'center',
      }}
      >
      <Typography
      variant='h5'
      component='h1'
      sx={{
        fontFamily: 'Quicksand',
        fontWeight : '500',
        mb: '20px'
      }}
      >
        Create an Account
      </Typography>
      <Box
      sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
      }}
      >
        <Button
        variant='contained'
        color='primary'
        startIcon={<GoogleIcon />}
        sx={{
          fontFamily: 'Quicksand',
          width : '250px',
          mb: '20px'
        }}
        >Sign up with Google</Button>
        <Button
        variant='contained'
        color='primary'
        startIcon={<FacebookIcon />}
        sx={{
          fontFamily: 'Quicksand',
          width : '250px',
          marginBottom: '20px'
        }}
        >Sign up with Facebook</Button>
      </Box>
        <Divider />
        <Typography
        variant='body3'
        component='p'
        sx={{
          marginBlock: '20px',
          fontFamily: 'Quicksand',
          fontSize: '12px',
        }}
        >
          Or </Typography>
          {/* sign up using email */}
          <Box
          component='form'
          onSubmit={handleSubmit}
          >
            {error && <Alert severity="error" sx={{marginBottom : '20px'}}>{error}</Alert>}
            {success && <Alert severity="success" sx={{marginBottom : '20px'}}>{success}</Alert>}
            <TextField
            id='email'
            variant='outlined'
            label='Email'
            type='email'
            value={email}
            onChange={handleEmailChange}
            required
            placeholder='E.g : JohnDoe@gmail.com'
            sx={{
              width: '100%',
              marginBottom : '20px'
            }}
            />
            <TextField
            id='password'
            variant='outlined'
            label='Password'
            type='password'
            value={password}
            onChange={handlePasswordChange}
            required
            placeholder='must at least 6 character strong'
            sx={{
              width: '100%',
              marginBottom : '20px'
            }}
            />
            <FormGroup>
              <FormControlLabel 
              control={<Checkbox checked={checked} onChange={handleChecked} />}
              label="I agree with the Term of Service"/>
            </FormGroup>
            <Button
            variant='contained'
            color="primary"
            type='submit'
            sx={{
              marginTop: '20px',
              width : '250px',
            }}
            >
              Create my Account
            </Button>
            <Typography
            component='p'
            variant='body3'
            sx={{
              mt: '20px'
            }}
            >Already have an Account? <Link href="/signin">Sign In</Link></Typography>
          </Box>
      </Box>
      
    </Container>
  )
}
