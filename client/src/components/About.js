import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Zoom from 'react-reveal/Zoom';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';

export default function Test() {
  return (
    <div style={{
      justifyContent: 'center',
      alignItems: 'center'
  }}>
    <Zoom>    
    
    <Container>
      <Grid style={{height: '100%', justifyContent: 'center'}} container >
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
                 
           }} 
             direction="row" spacing={2}>
               <Avatar style={{width: '100%', height: '100%'}} alt="Remy Sharp" src="https://media-exp1.licdn.com/dms/image/C4E03AQE7YWI-gjFsEw/profile-displayphoto-shrink_800_800/0/1579725105565?e=1659571200&v=beta&t=Er0PRFi7mk85upoTGVDfDaytqcd4r0wpS6gYYRRERZQ" />
             </Box>
         
            </Box>
    </Grid>
        <Grid item xs={12} md={6}>
            <Box  style={{height: '100%',textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor: 'white'}}>
            <Card style={{marginRight: '10px',marginLeft: '10px'}}>I consider myself a funny, responsible and reckles. Being this last quality extremely important when it comes to programming. I am really interested in videogames, metaverse and the crypto world, including mining.  I believe every workspace should have partnership and respect. I have the capacity to learn and understand quickly to overcome possible adversities.
           </Card>  
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
        <ListItemText style={{overflowWrap: 'break-word'}} primary="Phone" secondary="+5491155883168" />
      </ListItem>
    </List></Grid>
      </Grid>
    </Container>
    </Zoom>    
    </div>
  );
}