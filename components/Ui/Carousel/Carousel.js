import React, { useState,useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Button from "../Button/Button";
import CarouselItem from "./CarouselItem";
import CarouselButton from './CarouselButton';

const carouselData = [
  {
    imgSrc:"./Images/Index/Carousel-Images/yalda.png",
    link:"about-us"
  },
  {
    imgSrc:"./Images/Index/Carousel-Images/excoino.png",
    link:"about-us"
  },
  {
    imgSrc:"./Images/Index/Carousel-Images/metaverse.png",
    link:"about-us"
  },
  {
    imgSrc:"./Images/Index/Carousel-Images/123.png",
    link:"about-us"
  },
  {
    imgSrc:"./Images/Index/Carousel-Images/yalda.png",
    link:"about-us"
  },
  {
    imgSrc:"./Images/Index/Carousel-Images/excoino.png",
    link:"about-us"
  },
  {
    imgSrc:"./Images/Index/Carousel-Images/metaverse.png",
    link:"about-us"
  },
  {
    imgSrc:"./Images/Index/Carousel-Images/18.png",
    link:"about-us"
  },
]



const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const Carousel = () => {
  const [items,setItems] = useState([]);
  
  useEffect(()=>{
    carouselData.map((item)=>{
      setItems(perv=> [...perv,(<CarouselItem key={Math.random()} imgSrc={item.imgSrc} link={item.link} />)])
      })
  },[])

  const [mainIndex, setMainIndex] = useState(0);

   useEffect(() => {
    const nextSlide =setInterval(()=>{
      setMainIndex(perv => perv + 1);
    },6000)
    return () => {
      clearInterval(nextSlide)
    }
  }, [mainIndex,setMainIndex])

  const nextSlide = () => {
    setMainIndex((perv) => perv + 1);
    Carousel.slideNext();
  };
  const pervSlide = () => {
    setMainIndex((perv) => perv - 1);
    Carousel.slidePrev();
  };
  const onSlideChange = (e) => {
    console.log(`Item's position before a change: ${mainIndex}`,e );
    setMainIndex(()=>e.item)
};

const Dots = (item, i) => {
  return <div className={ (i === mainIndex)?"bg-gray-100  mx-0.5 w-2 h-2 translate scale-150 rounded-full transition ease-linear":"bg-gray-100 bg-opacity-50 mx-0.5 w-2 h-2 rounded-full transition  ease-linear scale-100" }
   key={i} onClick={() => Carousel.slideTo(i)} />;
};

const DotsBar = () =>{
  return <nav className="w-full z-10 h-5 absolute bottom-4 -translate-y-1/2 flex flex-row-reverse items-center left-0 px-8 right-0 justify-start md:hidden">{items.map(Dots)}</nav>
} 

  
/*lg:mx-52*/
  return (
    <div className="relative ">
      <AliceCarousel
         infinite
        mouseTracking
        disableButtonsControls
        disableDotsControls
        items={items}
        ref={(el) => (Carousel = el)}
        responsive={responsive}
        activeIndex={mainIndex}
        onSlideChanged={onSlideChange}
      />

    <DotsBar/>

      <div className=" flex justify-between">
         <CarouselButton onClick={pervSlide} direction="perv"/>
        <CarouselButton onClick={nextSlide} direction="next"></CarouselButton>
      </div>
    </div>
  );
};

export default Carousel;
