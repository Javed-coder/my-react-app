import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
import Project1Logo from "../assets/react-1.svg";
import "./Slider.css";

const Slider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className="slider__slick">
            <SlickSlider {...settings}>
                <div className="slide"> 
                    <h2>Project 1</h2>
                    <img src={Project1Logo} alt="" />
                    <a className="slide_link" target="blank" href="https://github.com/Javed-coder?tab=overview&from=2022-12-01&to=2022-12-31">
                        <i class="fa fa-github" aria-hidden="true" target="blank"></i>
                    </a>
                </div>
                
                <div className="slide">
                    <h2>Project 2</h2>
                    <img src={Project1Logo} alt="" />
                    <a className="slide_link" target="blank" href="https://github.com/Javed-coder?tab=overview&from=2022-12-01&to=2022-12-31">
                        <i class="fa fa-github" aria-hidden="true" target="blank"></i>
                    </a>
                </div>

                <div className="slide">
                    <h2>Project 3</h2>
                    <img src={Project1Logo} alt="" />
                    <a className="slide_link" target="blank" href="https://github.com/Javed-coder?tab=overview&from=2022-12-01&to=2022-12-31">
                        <i class="fa fa-github" aria-hidden="true" target="blank"></i>
                    </a>
                </div>
                
                <div className="slide">
                    <h2>Project 4</h2>
                    <img src={Project1Logo} alt="" />
                    <a className="slide_link" target="blank" href="https://github.com/Javed-coder?tab=overview&from=2022-12-01&to=2022-12-31">
                        <i class="fa fa-github" aria-hidden="true" target="blank"></i>
                    </a>
                </div>
                

            </SlickSlider>
        </div>
    );
};

export default Slider;