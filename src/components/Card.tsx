import React from 'react'
import styled from 'styled-components'
import { ProductDummy } from 'data/Product'

interface CardProps {
    lang: string
}

const Card = ({lang}:CardProps) => {
  return (
    <>
    {ProductDummy[lang].map((pro,index)=>(
    <Cardbox>
      <Imagebox><img src={pro.img} alt={pro.img}/></Imagebox>
      <Textbox>
        <h2>{pro.title}</h2>
        <p>{pro.description}</p>
      </Textbox>
    </Cardbox>
     ))}
     </>
  )
}
export default Card

const Cardbox = styled.div`
 border:2px solid blue;
 min-width: 33.3%;
`
const Imagebox = styled.div`
  height: 400px;
  overflow:hidden;
  margin:0 auto;
  img{
    width:95%;
    height:95%;
    object-fit:cover;
    margin: auto;
    display: block;
  }
` 
const Textbox = styled.div`
  height: 170px;
  width: 450px;
  margin: auto;
  margin-top: 10px;
`