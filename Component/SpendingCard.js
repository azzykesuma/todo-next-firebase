import {
    Typography,
    Paper,
    Box,
    IconButton,
} from '@mui/material';
import { onSnapshot } from 'firebase/firestore';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const SpendingData = ({today}) => {
    
    return (
        <Box
        maxWidth='sm'
        sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            marginInline : 'auto'
        }}
        >
            <Typography sx={{
                marginTop: '20px',
                fontFamily: 'Quicksand',
                component: 'body1',
                variant: 'h4',
                textAlign: 'left'
                }}>
                    {today}
            </Typography>
            <Paper
                color='primary'
                sx={{
                    marginTop: '20px',
                    backgroundColor: '#f5f5f5',
                    display: 'flex',
                }}
                >
                    <Box
                    sx={{
                        backgroundColor: '#E7CA31',
                        padding : '20px',
                        width : '30%',
                        borderRadius: '3px 0 0 0',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    >
                        <Typography
                        variant='body2'
                        component='p'
                        sx={{
                            fontFamily:'Quicksand',
                            color : '#262322'
                        }}
                        >
                            
                        </Typography>
                    </Box>
                    <Box
                    sx={{
                        backgroundColor: '#737DDB',
                        padding : '20px',
                        width: '70%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius : '0 3px 0 0'
                    }}
                    >
                        <Typography
                        variant='body2'
                        component='p'
                        sx={{
                            textAlign: 'center',
                            fontFamily:'Quicksand',
                            color : '#fff'
                        }}
                        >Bonus performa</Typography>
                        <Box
                        sx={{
                            marginLeft : 'auto',
                            display: 'flex'
                        }}
                        >
                            <IconButton>
                                <EditIcon  sx={{ color : 'white'}} />
                            </IconButton>
                            <IconButton>
                                <DeleteIcon  sx={{ color : 'white'}} />
                            </IconButton>
                        </Box>
                    </Box>
            </Paper>
        </Box>
    );
}
 
export default SpendingData;