import {
    getAuth,
    signOut 
} from 'firebase/auth';
import { useEffect,useState } from 'react';
import Router from 'next/router';
import {
    Alert,
    Container,
    Typography,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Button
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
    // open dialog functions
    const [open,setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
        console.log(open);
    }
    const handleClose = () => {
        setOpen(false)
    }

    // add Data to firestore
    // const addData = () => {
    //     addDoc(db,{
    //         name: 'test',
    //         age: 'test',
    //         email: 'test'
    //     })
    // }
    // async function readSpendingData() {
    //     const spending = doc(db, 'spending','9yzr9j2MrWgMLEwrP5LI')
    //     const docSnap = await getDoc(spending)
    //     const SpendingData = docSnap.data()
    //     const description = SpendingData.desc

    //     console.log(description);
    // }
    // readSpendingData()
    return (
        <>
            <Navbar />
            <Container 
            maxWidth="lg"
            >
                {/* { user ? null : <Alert severity='error'>You need to sign in to see this content</Alert>} */}
                <SpendingData/>
                <Dialog
                open={open}
                onClose={handleClose}
                >
                    <DialogTitle>Add Spending</DialogTitle>
                    <DialogContentText>Please Add your income/spending data</DialogContentText>
                    <DialogContent>
                        <TextField 
                        autoFocus
                        id='description'
                        label='Income/Outcome Description'
                        fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color='primary'>Close</Button>
                        <Button color='primary'>Add Spending</Button>
                    </DialogActions>
                </Dialog>
            </Container>
            <BottomBar
            handleOpen={handleOpen}
            open={open}
            />
        </>
    );
}
 
export default home;