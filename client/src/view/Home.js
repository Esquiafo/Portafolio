import React from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Courses from "../components/Courses";
import Grid from '@mui/material/Grid';
import Work from "../components/Work";
import Contact from "../components/Contact";
import './Home.css';

export default function Home(){
    return (
        
        <div className="color" style={{overflowX: 'hidden', overflowY: 'auto'}}>
          
        
      
  
    <About />

    <Skills />

    <Courses />

    <Contact />


          
        </div>
    );
}