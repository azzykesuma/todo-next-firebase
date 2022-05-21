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
    getDoc,
    getDocs,
    getFirestore,
    doc,
    query,
    orderBy
} from "firebase/firestore"; 
import { app } from './_app'

const home = () => {
    const auth = getAuth();
    const user = auth.currentUser
    const today = format(new Date(), 'dd/MM/yyyy')
    const db = getFirestore(app);

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
    const docRef = doc(db,"spending");
    const docSnap = getDoc(docRef)
    const q = db.collection('spending').orderBy('date','desc').limit(10);
    const querySnapshot = getDocs(q);
    querySnapshot.forEach(doc => {
        console.log(doc.id, " => ", doc.data());
    })
    console.log(q);
    return (
        <>
            <Navbar />
            <Container 
            maxWidth="lg"
            >
                {/* { user ? null : <Alert severity='error'>You need to sign in to see this content</Alert>} */}
                <SpendingData query={q}/>
            </Container>
            <BottomBar />
        </>
    );
}
 
export default home;