import * as React from 'react';
import {Link} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Fade from 'react-reveal/Fade';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextareaAutosize from '@mui/material/TextareaAutosize';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const redes=[
    {

        url: 'https://github.com/Esquiafo',
        icon: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',

    },
    {

        url: 'https://www.linkedin.com/in/leonardo-capone-52697a144/',
        icon: 'https://cdn.worldvectorlogo.com/logos/linkedin-icon.svg',

    },
    {

        url: 'https://api.whatsapp.com/send/?phone=5491155883168&text&app_absent=0',
        icon: 'https://cdn.worldvectorlogo.com/logos/whatsapp-icon.svg',

    },
    {

        url: 'https://www.instagram.com/esquiafito/',
        icon: 'https://cdn.worldvectorlogo.com/logos/instagram-2-1.svg',

    },
    {

        url: 'https://www.facebook.com/LeonardoCaponeOK/',
        icon: 'https://cdn.worldvectorlogo.com/logos/meta-1.svg',

    },
]
export default function Contact(){
    const [name, setName] = React.useState('Composed TextField');

    const handleChange = (event) => {
      setName(event.target.value);
    };
    return (
        <div style={{
            marginTop: '5vh',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',

        }}>
            
    
            <Container style={{backgroundColor: 'white'}}>
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <Grid style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                               
                            }} container>
            <Grid item xs={12}> <h1 style={{ textAlign: 'center'}}>Contact</h1></Grid>
            <Grid item xs={12} md={6}>
            <Grid item style={{
                                backgroundColor: "white",
                                display: 'flex',
                                padding: '5vw',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                               
                            }} container xs={12}>
                    
                    {redes.map((data, index) => (
                       
                       <Grid xs={4} key={index} spacing={2}>
                    

                        
                   
                               
                                    
                                        
                                            <Typography variant="h6" component="h6">
                                                <a href={data.url} target="_blank" rel="noopener noreferrer">
                                                    <img src={data.icon} alt="icon" style={{width: '50px',height: '50px'}}/>
                                                </a>
                                            </Typography>
                                       
                                    
                             
                     
                    
                
                        
                        </Grid>
                    ))}
                    
                </Grid>    
            </Grid>
            <Grid item xs={12} md={6}>  <Grid container spacing={2}>
        <Grid style={{ padding: '20px'}}xs={12} md={6} >
        <Grid  item xs={12}>
        <TextField
          style={{width: '100%'}}
          required
          id="outlined-required"
          label="Name"
          
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          style={{width: '100%'}}
          required
          id="outlined-required"
          label="Email"
        
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
            style={{width: '100%'}}
          required
          id="outlined-required"
          label="Cellphone"
         
        />
        </Grid>
      </Grid>
      
      <Grid style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width:'100%'
                            }} xs={12}md={6} >
      <Grid
     item xs={12}
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
        <TextareaAutosize

      aria-label="empty textarea"
      placeholder=""
      style={{ height: '150px', width: '80%' }}
    />
    <Button style={{marginTop: '1vh', marginBottom: '1vh', width: '250px'}} variant="outlined">Send</Button>
          </Grid>
          </Grid>
        </Grid></Grid>

        </Grid>
       
     
          
       

      
            
       
    </Box>
            </Container>
         
        </div>
      );
}