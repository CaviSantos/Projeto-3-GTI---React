import React, { useState, useEffect, useCallback } from 'react';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';
import { FaCircle } from 'react-icons/fa';
import slideJson from '../AquivosJson/SlidesDados.json';

import maoImage from '../images/mao.jpg';
import stalinImage from '../images/stalin.jpg';
import kimImage from '../images/kim.webp';

function Slide() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = slideJson.slide.map(slide => {
    switch(slide.id) {
      case 1:
        return { ...slide, imagem: maoImage };
      case 2:
        return { ...slide, imagem: stalinImage };
      case 3:
        return { ...slide, imagem: kimImage };
      default:
        return slide;
    }
  });

  const nextSlide = useCallback(() => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, slides.length]);

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, nextSlide]);

  return (
    <div className="Slider h-auto border-b-2 pt-6 pb-6 border-yellow-300 bg-black flex flex-col items-center z-0">
      <h2 className="text-yellow-300 font-bold text-4xl sm:text-5xl text-center">Feedback da Galera!</h2>

      <div className="conteinerSlidefoto flex flex-col lg:flex-row justify-center items-center pt-5 gap-8 lg:gap-40">
        <div className="flex flex-row gap-4 lg:gap-10 items-center">
          <button className="text-purple-600 text-3xl sm:text-5xl" onClick={prevSlide}>
            <GoArrowLeft />
          </button>
          <div className="relative border-2 border-purple-600 h-60 w-40 sm:h-80 sm:w-60 rounded-xl flex justify-center items-center bg-center bg-cover" style={{ backgroundImage: `url(${slides[currentSlide].imagem})` }}>
            <div className="absolute bottom-4 flex justify-center w-full">
              {slides.map((slide, index) => (
                <FaCircle
                  key={index}
                  className={`mx-1 text-${index === currentSlide ? 'yellow' : 'purple'}-600 rounded-full cursor-pointer`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
          <button className="text-purple-600 text-3xl sm:text-5xl" onClick={nextSlide}>
            <GoArrowRight />
          </button>
        </div>

        <div className="text-center lg:text-left">
          <h3 className="text-yellow-300 font-bold text-2xl sm:text-3xl">Comentários</h3>
          <div className="pt-6 sm:pt-10 w-60 sm:w-80 overflow-hidden h-auto">
            <p className="text-yellow-300">{slides[currentSlide].comentario}</p>
            <p className="text-yellow-300 pt-6 sm:pt-10">{slides[currentSlide].Sobrenome}, {slides[currentSlide].nome}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
