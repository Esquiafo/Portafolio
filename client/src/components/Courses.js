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
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const estudios = [
    {
        nombre: 'Software Engineer',
        institucion: 'Universidad de Buenos Aires',
        fecha: '2018 / Present',
        duracion: '6 meses',
        logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQF-QztqGXBokQ/company-logo_200_200/0/1519861386584?e=1662595200&v=beta&t=D0mrG3NBBR8TbofUFgQh-YolFBW31qNoBKjUhatfBes',
        certificado: undefined,
        descripcion: 'University Degree '
    },
    {
        nombre: 'Java Fullstack Springboot',
        institucion: 'Egg Education',
        fecha: '2021 / 2022',
        duracion: '6 meses',
        logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQFPe6to80P9sg/company-logo_200_200/0/1519906869481?e=1662595200&v=beta&t=rgFju4p3nlGnh-PAe7ftcbytr4m72zAuf04VvctcsqA',
        certificado: 'https://sn3302files.storage.live.com/y4m_86o9xa1vhyxE05m-3hcr1_0LGY8YRaO9rEf0NVUMu2oblxHYwaz31gAOhMdkI0IbUOWjFTpRhT6waKW_wd2i5piqckoVL4UlndtGIIRwcIS_tkQ0atrRv4dS16z6Cvn4pxfGdPd6icb8STyDSsUjZHe4jeMUbSg9JGPMohBHpWOjLTFpDt3wtE6wp5H6it6?encodeFailures=1&width=1920&height=883',
        descripcion: 'Java, Collections, Classes, Encapsulation, Polymorphism, Overloading, Methods, JDBC, JPA, Spring, Maven'
    },
    {
        nombre: 'Fullstack Node.js',
        institucion: 'Digital House',
        fecha: '2019 / 2020',
        duracion: '6 mounths',
        logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQH1TYJrMLiA5w/company-logo_200_200/0/1647269265278?e=1662595200&v=beta&t=-iOXHd-4sAjODQ9-U7KokdtcOUcPsdbN83KDlQ6f_Mw',
        certificado: 'https://sn3302files.storage.live.com/y4mBPj9R4HNaow3vyC5Xj_f8f4pmyxEPSiwcby6cqccy0zTAQUBY3b750AXT4WG10_dbxwZh8PFo3jHmBri_qN9dEmzOwrOLzmdSkcalj3G-691f-bivvlAyNclvqFnYXjzZfkyHnV6wbNusMHdNn0HEEATGvYiy_nP6eyp0or0re2VdqaAVGO-fcePCF-xnR_F?encodeFailures=1&width=1920&height=883',
        descripcion: 'HTML, CSS, Javascript, MySQL, Node.js, Express.js, React.js, RestAPI, CRUD, AGILE, Postman.'
    },
    {
        nombre: 'Game Developer Unity Basics ',
        institucion: 'UTN Elearning',
        fecha: '2018',
        duracion: '6 meses',
        logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHkHKKEsnGofA/company-logo_200_200/0/1519883611072?e=1662595200&v=beta&t=io95T7tNrCkpNnCOc--iWLPeCc-3VR9uHhzXsurA3nM',
        certificado: 'https://sn3302files.storage.live.com/y4m7K6L50jOiibJQ2E4U0FOaqpszi4VvCqKHepbTIzM_PF9IEEMCOMXJ-V7ipKozIAPvLoc6ZkjEDjTYbF2BL-Mv697EWXd9HHcKZvXfqh5BmTJtLnxmjIDLQ4VH3WK7hg9LaBHRJK1BVaPUyUtGbrEZ0MzrYqWoS7duw9PSh5uA3_-ZRHTk53xdVXpGIePam3l?encodeFailures=1&width=498&height=214',
        descripcion: 'C++ Basics, Unity Software Basics, Blender Software Basics'
    },
]
export default function Courses(){
    return (
        <div style={{
            marginTop: '5vh',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',

        }}>
            
    
            <Container>
            <Fade>  
                <Grid >
                <Grid item xs={12}> <h1 style={{color:'white', textAlign: 'center'}}>Education</h1></Grid>
                    {estudios.map((data, index) => (
                       
                       <Grid style={{height: '100%',paddingBottom: '1vh'}} key={index} container spacing={2}>
                       <Grid  item xs={6} md={3}>
                        <Card  style={{ height: '125px',
                                paddingLeft: '1vw',
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                               
                               
                            }} >
                        <Avatar sx={{ width: 65, height: 65 }} style={{marginRight: '1vw'}} alt="Remy Sharp" src={data.logo} /> 
                       <h3>{data.institucion}</h3>
                        </Card>
                       </Grid>

                       <Grid item xs={6} md={3}>
                       <Card style={{
                           height: '125px',
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                               
                               
                            }}> <h3 style={{textAlign: 'center'}}>{data.nombre}</h3></Card>
                       </Grid>
                       <Grid item xs={8} md={4}>
                       <Card style={{
                           height: '125px',
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                                
                               
                            }}><Typography style={{textAlign: 'center'}} >{data.descripcion}</Typography ></Card>
                       </Grid>
                       <Grid item xs={4} md={2}>
                       <Card style={{
                                height: '125px',
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                                
                               
                            }}>
                          <Grid  style={{textAlign: 'end'}} item xs={12} md={6}>  {data.fecha} </Grid>
                                  
                        
                          {data.certificado!==undefined?(
                              <Grid style={{textAlign: 'center'}} item xs={12} md={6}>
                                <a href={data.certificado} target="_blank">
                                <IconButton aria-label="delete">
                                <ArrowCircleDownIcon />
                                </IconButton>
                            </a>
                              </Grid> 
                         
                          ):(
                            <Grid  style={{textAlign: 'center'}} item xs={12} md={6}>
                                 <a target="_blank">
                                <IconButton aria-label="delete" disabled>
                                <ArrowCircleDownIcon />
                                </IconButton>
                            </a>
                            </Grid> 
                           
                          )}
                            </Card >
                       </Grid>
                     </Grid>
                    ))}
                    
                </Grid>
                </Fade>
            </Container>
         
        </div>
      );
}