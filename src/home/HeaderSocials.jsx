import React from "react";
import "./home.css";

const HeaderSocials = () => {    
    return (
        <div className="header__socials home__socials">
            <a href="https://www.instagram.com/alimzai_07/" target="_blank" rel="noopener noreferrer" className="home__social-link">
                <i className="icon-social-instagram"></i>
            </a>   

            <a href="https://x.com/?lang=en&mx=2" target="blank" className="home__social-link">
                <i className="icon-social-twitter"></i>
            </a> 
            
            <a href="https://x.com/?lang=en&mx=2"className="home__social-link">
                <i className="icon-social-facebook"></i>
            </a>   
            
            <a href="https://x.com/?lang=en&mx=2" className="home__social-link">
                <i className="icon-social-github"></i>
            </a>  
            
            <a href="https://x.com/?lang=en&mx=2" className="home__social-link">
                <i className="icon-social-dribbble"></i>
            </a>
          
        </div>        
    );
};

export default HeaderSocials;