import React from "react";
import "./resume.css"; 
import Slider from "./Slider";

const Resume = () => {    
    
    return (
        <section>
            
            <div className="resume container" id="resume">
                <h1 className= "resume__text">
                    Projects       
                </h1>    
                             
            </div>
            {/* Slider Below */} 
            <Slider />   
        </section>    
    );
};
export default Resume;

