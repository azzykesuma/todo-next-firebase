import {
    Box,
    Typography,
    IconButton,
    Button
} from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArticleIcon from '@mui/icons-material/Article';

const BottomBar = ({handleOpen}) => {

    return (
        <Box
        component='footer'
        sx={{
            borderTop: '1px solid grey',
            padding : '10px',
            marginTop : '20px',
            display: 'flex',
            justifyContent: 'space-evenly',
            position: 'fixed',
            bottom: '0',
            width: '100%'
        }}
        >
            <IconButton><AccountBalanceWalletIcon fontSize='large'/></IconButton>
            <Button disableRipple onClick={handleOpen}><IconButton><AddCircleIcon fontSize='large' /></IconButton></Button>
            <IconButton><ArticleIcon fontSize='large' /></IconButton>
        </Box>
    );
}
 
export default BottomBar;