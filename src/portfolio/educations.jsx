import React from "react";
import "./educations.css";

const Educations = () => {
    return (        
        <section id="education">
            <div className="container" id="education">
                
                <h2 className="education-heading">Education</h2>
                <div className="bachelor-education-card">
                    <h1 className="education-card-title">Bachelor of Computer Application</h1>
                    <p className="education-card-stream">Computer Science and Engineering</p>
                    <p className="education-card-duration">2018 - 2021</p>
                    <p className="education-card-percentage">CGPA: 6.98</p>
                    <p className="education-card-institute">APG University, Shimla</p>
                </div>
                
                <div className="master-education-card">
                    <h1 className="education-card-title">Masters in MSC.IT</h1>
                    <p className="education-card-stream">Computer Science and Engineering</p>
                    <p className="education-card-duration">2022 - 2024</p>
                    <p className="education-card-percentage">CGPA: 7.0</p>
                    <p className="education-card-institute">Panjab University, Chandigarh India</p>
                </div>
            
            </div>
        </section>
    );
};

export default Educations;
