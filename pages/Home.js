import { Button } from '@mui/material';
import {
    getAuth,
    signOut 
} from 'firebase/auth';
import { useEffect } from 'react';
import Router from 'next/router';
import {
    Alert
} from '@mui/material';

const home = () => {
    const auth = getAuth();
    const user = auth.currentUser
    
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
        { user ? null : <Alert severity='error'>You need to sign in to see this content</Alert>}
        <Button onClick={handleSignOut}>Sign Out</Button>
        </>
    );
}
 
export default home;