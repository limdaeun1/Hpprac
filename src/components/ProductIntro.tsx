import React from 'react'
import styled from 'styled-components'
import Swiperslider from './Swiperslider';


interface IntroProps {
    lang: string
}


const Intro = ({lang}: IntroProps) => {

  return (
    <>
    <Title className='products'>Products</Title>
    <Hr></Hr>
    <Container>
        <Swiperslider lang={lang}/>
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
    height: 700px;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
`

