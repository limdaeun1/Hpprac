import React from 'react'
import { ProductDummy } from 'data/Product';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderProps {
  lang: string
}


const Swiperslider = ({lang}:SliderProps) => {

  const settings = {
    dots:true,
    infinite:true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    centerPadding: '0px',
  }

  return (
   <StyledSlider {...settings}>
   {ProductDummy[lang].map((pro,index)=>(
    <Cardbox>
      <Imagebox><img src={pro.img} alt={pro.img}/></Imagebox>
      <Textbox>
        <h2>{pro.title}</h2>
        <p>{pro.description}</p>
      </Textbox>
    </Cardbox>
   ))}
   </StyledSlider>
  )
}

export default Swiperslider

const Cardbox = styled.div`
  max-width: 500px;
  min-height: 600px;
  border: 1px solid gray;
`

const Imagebox = styled.div`
  height: 400px;
  overflow:hidden;
  margin:0 auto;
  img{
    width:100%;
    height:100%;
    object-fit:cover;
  }
` 

const Textbox = styled.div`
  height: 170px;
  width: 450px;
  margin: auto;
  margin-top: 10px;
`

const StyledSlider = styled(Slider)`
  .slick-dots{
    bottom: -50px;
  }
  .slick-list{
    width: 1600px;
    margin: 0 auto;
  }
`