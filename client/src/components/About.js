import * as React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Zoom from 'react-reveal/Zoom';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  
  const Div = styled('div')(({ theme }) => ({
      ...theme.typography.button,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1),
    }));

export default function Test() {
  return (
    <div style={{
    
       
       
      justifyContent: 'center',
      alignItems: 'center'
  }}>
       <Zoom>    
    
    <Container>
      <Grid style={{height: '100%', justifyContent: 'center'}} container xs={12}>
        <Grid item xs={12}> <h1 style={{color:'white', textAlign: 'center'}}>About</h1></Grid>
        <Grid item xs={12} md={3}>
        <Box style={{
          
          backgroundColor: 'white',
                height:'100%',
                 display: 'flex',
                 justifyContent: 'center',
                 alignItems: 'center'}} >
         
            
             <Box 
             style={{
              padding: '10px',
                 justifyContent: 'center',
                 height: '35vh',
           }} 
             direction="row" spacing={2}>
               <Avatar style={{height: '100%',width: '100%'}} alt="Remy Sharp" src="https://media-exp1.licdn.com/dms/image/C4E03AQE7YWI-gjFsEw/profile-displayphoto-shrink_800_800/0/1579725105565?e=1659571200&v=beta&t=Er0PRFi7mk85upoTGVDfDaytqcd4r0wpS6gYYRRERZQ" />
             </Box>
         
                   </Box>
    </Grid>
        <Grid item xs={12} md={6}>
            <Box  style={{height: '100%',textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor: 'white'}}>
              John Sullivan is a Human Resources specialist with a decade of successful experience in hiring and employee management. John specializes in Human Resource technologies and regularly attends national training sessions to showcase new HR tech trends, such as self-service, wellness apps, and people analytics tools. A strong believer in the power of positive thinking in the workplace, John regularly develops internal wellness campaigns to assist employees with effective mental health techniques. John enjoys a good Netflix binge but can also be found on long bike rides on hilly country roads.
            </Box> 
        </Grid>
        <Grid item xs={12} md={3} style={{
                 justifyContent: 'center',
                 alignItems: 'center'}}>              
      <List style={{background: 'white', }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <HomeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText style={{overflowWrap: 'break-word'}} primary="Born Date" secondary="09/22/1997 Age: 25" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText style={{overflowWrap: 'break-word'}} primary="Location" secondary="Buenos Aires, Argentina" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText style={{overflowWrap: 'break-word'}} primary="Email" secondary="leocapone@hotmail.com" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocalPhoneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText style={{overflowWrap: 'break-word'}} primary="Cellphone" secondary="+5491155883168" />
      </ListItem>
    </List></Grid>
      </Grid>
    </Container>
    </Zoom>    
    </div>
  );
}