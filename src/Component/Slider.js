import React, { useState, useEffect, useRef } from "react";
import img1 from "../img/Kakaobank.jpg";
import img2 from "../img/Portfolio.jpg";
import img3 from "../img/TodoList.jpg";
import "../style/Slider.css";

const Total_Slides = 2;

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

    const nextSlide = () => {
        if (currentSlide >= Total_Slides) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드 초기화
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };
    const prevSlide = () => {
        if (currentSlide === 0) { 
            setCurrentSlide(Total_Slides);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    useEffect(() => {
        slideRef.current.style.transition = "all o.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }, [currentSlide]);



    return (
    <container>
        {currentSlide}
        <sliderContainer ref={slideRef} >
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        </sliderContainer>
        <button onClick={prevSlide}> Previous </button>
        <button onClick={nextSlide}> Next </button>
    </container>
 );
}
    