import React from "react";
import "./home.css";
import Me from "../assets/images/myPic.jpg";
import HeaderSocials from "./HeaderSocials";
const Home = () => {
    return (
        <section className="home container" id="home">
            
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
            
            
            <h1 className="home__name">Javed Alimzai</h1>
            <span className="home__profession">Web Developer</span>
            
            
            <HeaderSocials />

                <a href="#contact" className="btn">
                    Hire Me
                </a>

        </div>
        </section>
    );
}
export default Home;

