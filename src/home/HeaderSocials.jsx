import React from "react";

const HeaderSocials = () => {    
    return (
        <div className="header__socials home__socials">
            <a href="https://www.instagram.com/alimzai_07/" className="home__social-link">
                <i className="icon-social-instagram"></i>
            </a>   

            <a href="#" className="home__social-link">
                <i className="icon-social-twitter"></i>
            </a> 
            
            <a href="#" className="home__social-link">
                <i className="icon-social-facebook"></i>
            </a>   
            
            <a href="#" className="home__social-link">
                <i className="icon-social-github"></i>
            </a>  
            
            <a href="#" className="home__social-link">
                <i className="icon-social-dribbble"></i>
            </a>
          
        </div>        
    );
};

export default HeaderSocials;