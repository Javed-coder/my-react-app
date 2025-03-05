import React from "react";
import "./resume.css"; 
import Slider from "./Slider";

const Resume = () => {    
    
    return (
        <section className="resume__section">
            
            <div className="resume container" id="resume">
                <h1 className= "resume__text">
                    Projects       
                </h1>
                <h8>All of my Projects</h8>    
                <Slider />            
            </div>
              
        </section>    
    );
};
export default Resume;

