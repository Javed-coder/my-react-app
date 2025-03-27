import React from "react";
import "./home.css";

import HeaderSocials from "./HeaderSocials";
const Home = () => {
    return (
        <section className="home container" id="home">
            
            <div className="intro">
                
                <div className="intro_child">
                    <h1 className="home__name">Javed Alimzai</h1>
                    <span className="home__profession">Web Developer</span>


                    <HeaderSocials />

                    <a href="#contact" className="btn">
                        Hire Me
                    </a>

                </div>
            
        </div>
        </section>
    );
}
export default Home;

