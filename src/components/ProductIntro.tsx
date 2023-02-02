import React from 'react'
import styled from 'styled-components'
import { ProductDummy } from 'data/Product';

interface IntroProps {
    lang: string
}


const Intro = ({lang}: IntroProps) => {

  return (
    <>
    <Title>Products</Title>
    <Hr></Hr>
    <Container>
        {ProductDummy[lang].map((pro,index)=>(
        <Box key={index}>
            <Imagebox>
                <img src ={pro.img} alt="factory"></img>
            </Imagebox>
            <Textbox>
                <h2>{pro.title}</h2>
                <p>{pro.description}</p>
            </Textbox>
        </Box>
        ))}
    </Container>
    </>
  )
}

export default Intro

const Title = styled.h1`
    color:gray;
    text-align: center;
`

const Hr = styled.hr`
  margin: 0 50px 10px 50px;
  border: 1px solid #c2b8b8;
`

const Container = styled.div`
    height: 600px;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    display: flex;
`

const Box = styled.div`
    width: 30%;
    margin: 5px;
`

const Imagebox = styled.div`
    width:100%;
    height: 53%;
    overflow:hidden;
    img{
        object-fit: cover;
        width: 400px;
        height: 300px;
    }
`

const Textbox = styled.div`
    min-height: 200px;
    width: 400px;
`