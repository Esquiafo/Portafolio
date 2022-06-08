import React, {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import axios from 'axios'
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
    const [name, setName] = useState('');
    const handleChangeName = (event) => {
      setName(event.target.value);
    };
    const [phone, setPhone] = useState('');
    const handleChangePhone = (event) => {
      setPhone(event.target.value);
    };
    const [email, setEmail] = useState('');
    const handleChangeEmail = (event) => {
      setEmail(event.target.value);
    };
    const [message, setMessage] = useState('');
    const handleChangeMessage = (event) => {
      setMessage(event.target.value);
    };
    let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(email)
    let validName = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(name)
    let validPhone = /\b(?:\d[ ]*?){6,}\b/.test(phone)
    const sendEmail = () => {
      axios
      .post(`${window.location.href}api/email`, {
        name,
        email,
        phone,
        message
      })
      .then(response => response.status)
      .catch(err => console.warn(err));
    
    }
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
                       
                       <Grid item xs={4} key={index} >
                    

                        
                   
                               
                                    
                                        
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
        <Grid style={{ padding: '20px'}} item xs={12} md={6} >
        <Grid  item xs={12}>
        {validName ? (
          <TextField
          style={{width: '100%'}}
          required
          
          id="outlined-required red"
          label="Name"
          onChange={handleChangeName}
         
        />
        ): 
          <TextField
          style={{width: '100%'}}
          required
          error
          id="outlined-required red"
          label="Name"
          onChange={handleChangeName}
         
        />
        }
        </Grid>
        <Grid item xs={12}>
        {validEmail ? (
          <TextField
          style={{width: '100%'}}
          required
          
          id="outlined-required red"
          label="Email"
          onChange={handleChangeEmail}
         
        />
        ): 
          <TextField
          style={{width: '100%'}}
          required
          error
          id="outlined-required red"
          label="Email"
          onChange={handleChangeEmail}
         
        />
        }
        </Grid>
        <Grid item xs={12}>
        {validPhone ? (
          <TextField
          style={{width: '100%'}}
          required
          
          id="outlined-required red"
          label="Phone"
          onChange={handleChangePhone}
         
        />
        ): 
          <TextField
          style={{width: '100%'}}
          required
          error
          id="outlined-required red"
          label="Phone"
          onChange={handleChangePhone}
         
        />
        }
        </Grid>
      </Grid>
      
      <Grid style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width:'100%'
                            }} item xs={12}md={6} >
      <Grid
      style={{paddingBottom: '20px'}}
     item xs={12}
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
        <TextareaAutosize
      onChange={handleChangeMessage}
      aria-label="empty textarea"
      placeholder=""
      style={{ height: '150px', width: '80%' }}
    />
    {validName=='' || validPhone=='' || validEmail=='' || message=='' ? <Button disabled >Send</Button> : <Button style={{backgroundColor: 'black', color: 'white', marginTop: '10px', width: '80%'}} onClick={sendEmail}>Send</Button>}
          </Grid>
          </Grid>
        </Grid></Grid>

        </Grid>
       
     
          
       

      
            
       
    </Box>
            </Container>
         
        </div>
      );
}