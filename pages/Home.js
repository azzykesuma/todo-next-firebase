import {
    getAuth,
    signOut 
} from 'firebase/auth';
import { useEffect } from 'react';
import Router from 'next/router';
import {
    Alert,
    Container,
    Typography,
    Paper
} from '@mui/material';
import Navbar from '../Component/Navbar';
import { format } from 'date-fns'

const home = () => {
    const auth = getAuth();
    const user = auth.currentUser
    const today = format(new Date(), 'dd/MM/yyyy')
    
    useEffect(() => {
        if(!user) {
            Router.push('/signin');
        }
    })
    // sign out functions
    const handleSignOut = () => {
        signOut(auth)
            .then(user => {
                Router.push('/')
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <>
            <Navbar />
            <Container maxWidth="lg">
                { user ? null : <Alert severity='error'>You need to sign in to see this content</Alert>}
                <Typography sx={{
                    marginTop: '20px',
                    fontFamily: 'Quicksand',
                    component: 'body1',
                    variant: 'h4'
                }}>
                    {today}
                </Typography>
                <Paper
                color='primary'
                >
                    test
                </Paper>
            </Container>
        </>
    );
}
 
export default home;