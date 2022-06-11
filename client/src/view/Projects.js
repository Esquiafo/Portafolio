import React from "react";
import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
const projects = [
    "Javascript","CSS","HTML","Node"
]
export default function Projects(){
    const languages = projects.map((project, index) => {
        return(
            <div  style={{textAlign: 'center'}}  key={index}>
            <Link to={project.toLowerCase()}>
            <Button style={{width: '90%', textAlign: 'center'}} variant="contained" size="large">
           
           {project}
          
            </Button>
            </Link>
            </div>

        )
    })
    
    return (
        
        <div className="color" style={{overflowX: 'hidden', overflowY: 'auto'}}>
           <Box sx={{ '& button': { m: 1 } }}>
          
           {languages}
            </Box>
        

          
        </div>
    );
}