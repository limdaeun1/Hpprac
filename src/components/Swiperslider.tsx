import React from 'react'
import { ProductDummy } from 'data/Product';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

interface SliderProps {
  lang: string
}


const Swiperslider = ({lang}:SliderProps) => {

  const settings = {
    dots:true,
    infinite:true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3.5,
    centerPadding: '0px',
  }

  return (
   <StyledSlider {...settings}>
   {ProductDummy[lang].map((pro,index)=>(
    <StyledLink to={`/products?id=${index}`}>
      <Cardbox>
        <Imagebox><img src={pro.img} alt={pro.img}/></Imagebox>
        <Textbox>
          <h2>{pro.title}</h2>
          <p>{pro.description}</p>
        </Textbox>
      </Cardbox>
    </StyledLink>
   ))}
   </StyledSlider>
  )
}

export default Swiperslider

const Cardbox = styled.div`
  max-width: 500px;
  /* min-height: 600px; */
  border: 1px solid gray;
  margin: 0 2%;
`

const Imagebox = styled.div`
  height: 35vh;
  overflow:hidden;
  margin:0 auto;
  img{
    width:100%;
    height:100%;
    object-fit:cover;
  }
` 

const Textbox = styled.div`
  height: 250px;
  width: auto;
  margin: auto;
  margin-top: 10px;
`

const StyledSlider = styled(Slider)`
  .slick-dots{
    bottom: -50px;
  }
  .slick-list{
    margin: 0 auto;
    width: 90%;
    overflow:hidden;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`