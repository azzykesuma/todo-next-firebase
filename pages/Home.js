import {
    getAuth,
    signOut 
} from 'firebase/auth';
import { useEffect } from 'react';
import Router from 'next/router';
import {
    Alert,
    Container,
    Typography
} from '@mui/material';
import Navbar from '../Component/Navbar';
import { format } from 'date-fns'
// components
import SpendingData from '../Component/SpendingCard';
import BottomBar from '../Component/bottomBar';
// firestore
import { 
    collection,
    addDoc,
    getDocs
} from "firebase/firestore"; 

const home = () => {
    const auth = getAuth();
    const user = auth.currentUser
    const today = format(new Date(), 'dd/MM/yyyy')
    
    // useEffect(() => {
    //     if(!user) {
    //         Router.push('/signin');
    //     }
    // })
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
    const querySnapshot =  getDocs(collection(db,"spending"));
    console.log(querySnapshot);
    return (
        <>
            <Navbar />
            <Container 
            maxWidth="lg"
            >
                {/* { user ? null : <Alert severity='error'>You need to sign in to see this content</Alert>} */}
            </Container>
            <BottomBar />
        </>
    );
}
 
export default home;