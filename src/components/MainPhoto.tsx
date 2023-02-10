import React from 'react'
import styled from 'styled-components'

const Main = () => {

  return (
    <Container className='main'>
        <img src ="img/factory.jpg" alt="factory"></img>
    </Container>
  )
}

export default Main

const Container = styled.div`
    height: 730px;
    width: 100%;
    /* min-width: 1500px; */
    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    z-index: 1;
    position: relative;
`

