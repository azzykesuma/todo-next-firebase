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
 } from '@mui/material'

import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';


export default function Home() {
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
          >
            <TextField
            id='email'
            variant='outlined'
            label='Email'
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
            placeholder='must at least 6 character strong'
            sx={{
              width: '100%',
              marginBottom : '20px'
            }}
            />
            <FormGroup>
              <FormControlLabel 
              control={<Checkbox />}
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
          </Box>
      </Box>
      
    </Container>
  )
}
