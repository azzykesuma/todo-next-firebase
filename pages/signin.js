import { useState } from 'react';
import { 
    Box, 
    Container,
    Typography,
    TextField,
    Button
} from "@mui/material";
import Link from 'next/link'
// firebase functions
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Router from 'next/router';

const Signin = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
  
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
  
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
            .then(cred => {
                console.log(`user ${cred.user.email} signed in`);
                Router.push('/Home');
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <Container
        maxWidth='md'
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
            }}>
                Sign in
            </Typography>
            <Box
            component='form'
            onSubmit={handleSubmit}
            >
            <TextField
            id='email'
            variant='outlined'
            label='Email'
            placeholder='E.g : JohnDoe@gmail.com'
            value={email}
            onChange={handleEmailChange}
            type='email'
            required
            sx={{
              width: '100%',
              marginBottom : '20px'
            }}
            />
            <TextField
            id='password'
            variant='outlined'
            label='Password'
            value={password}
            onChange={handlePasswordChange}
            type='password'
            required
            placeholder='must at least 6 character strong'
            sx={{
              width: '100%',
              marginBottom : '20px'
            }}
            />
            <Button
            variant='contained'
            color="primary"
            type='submit'
            sx={{
              marginTop: '20px',
              width : '250px',
            }}
            >
              Sign in
            </Button>
            <Typography
            component='p'
            variant='body3'
            sx={{
              mt: '20px'
            }}
            >Don't have an Account? <Link href="/">Sign Up</Link> here</Typography>
            </Box>
        </Box>
        </Container>
    );
}
 
export default Signin;