import React from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Courses from "../components/Courses";
import Contact from "../components/Contact";

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