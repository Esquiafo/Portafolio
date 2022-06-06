import * as React from 'react';
import { styled, useTheme} from '@mui/material/styles';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Fade from 'react-reveal/Fade';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    0: 'No experience',
  0.5: 'Bad ',
  1: 'Poor',
  1.5: 'Narrow',
  2: 'Fair',
  2.5: 'Okay',
  3: 'Good',
  3.5: 'Qualified',
  4: 'Very Good',
  4.5: 'Great',
  5: 'Excellent',
};
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const skilled =[{
    name: 'HTML',
    image: 'https://cdn.worldvectorlogo.com/logos/html-1.svg',
    percentage: 4.5,
},
    {
        name: 'CSS',
        image: 'https://cdn.worldvectorlogo.com/logos/css-3.svg',
        percentage: 3.5,
       },
       {
        name: 'Bootstrap',
        image: 'https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg',
        percentage: 4.5,
       },
    {  
        name: 'JavaScript',
        image: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
        percentage: 5,
        },
    {
        name: 'React',
        image: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
        percentage: 4,
       },
    {
        name: 'Node.js',
        image: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
        percentage: 4,
    },
    {
        name: 'MongoDB',
        image: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
        percentage: 2.5,
    },
    {
        name: 'Express.js',
        image: 'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png',
        percentage: 4.5,
    },
    {
        name: 'Git',
        image: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg',
        percentage: 5,
    },
    {
        name: 'Java',
        image: 'https://cdn.worldvectorlogo.com/logos/java.svg',
        percentage: 4,
    },
    {
        name: 'MySQL',
        image: 'https://cdn.worldvectorlogo.com/logos/mysql-6.svg',
        percentage: 4,
    },

    {
        name: 'Springboot',
        image: 'https://cdn.worldvectorlogo.com/logos/spring-3.svg',
        percentage: 3,
    }
    
]
const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));
export default function Skills(){
    const theme = useTheme();
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            
    
            <Container>
            <Fade>  
                <Grid style={{justifyContent: 'center'}}   container spacing={2}>
                <Grid item xs={12}> <h1 style={{color:'white', textAlign: 'center'}}>Skills</h1></Grid>
                    {skilled.map((skill, index) => (
                       
                         <Grid   item xs={12} sm={12} md={6} key={index}>
                            
                            <Card  style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                               
                            }} >
                            <Grid style={{width:'275px'}}>
                            <Container sx={{ display: 'flex', flexDirection: 'column', paddingTop:'1vh' }}>

<Avatar  sx={{ width: 50, height: 50 }} style={{marginRight: '1vw', alignSelf: 'center'}} alt="Remy Sharp" src={skill.image} /> 
<Typography style={{textAlign: 'center',marginLeft: '-1vw'}} component="div" variant="h5">
{skill.name}
</Typography>



</Container>
                            </Grid>
                           <Grid style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                               
                            }} xs={12} sm={12} md={6}>
                                <Grid xs={12} sm={12} md={6}  style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                               
                            }} >
                            <Rating
                           
                                name="text-feedback"
                                value={skill.percentage}
                                readOnly
                                precision={0.5}
                                emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
                              />
                            </Grid>
                           <Grid xs={12} sm={12} md={6}>
                           <Container style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                               
                            }} >{labels[skill.percentage]}</Container>
                           </Grid>
                            
                           </Grid>

                          </Card>
                          </Grid>
                    ))}
                    
                </Grid>
                </Fade>
            </Container>
         
        </div>
    )
}
