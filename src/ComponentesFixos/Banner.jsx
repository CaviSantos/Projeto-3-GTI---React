import React from 'react';
import bannerTop from '../images/banner-top.png'; 

function Banner({ image = bannerTop }) {
    return (
        <div className="relative h-screen border-b-2 border-yellow-300">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            </div>
            <div className="relative z-10">
                <h1 className="text-yellow-300 pl-4 sm:pl-8 lg:pl-12 pt-12 font-bold text-3xl sm:text-4xl lg:text-5xl">
                    Lorem Ipsum<br />Coisas Interessantes<br />Muita Coisas
                </h1>
                <h1 className="text-yellow-300 pl-4 sm:pl-8 lg:pl-12 text-base sm:text-lg">
                    coisas interessantes e mais coisas<br /> e por ai vai muito legal mesmo
                </h1>
            </div>
        </div>
    );
}

export default Banner;
