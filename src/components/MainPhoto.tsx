import React from 'react'
import styled from 'styled-components'

const Main = () => {

  return (
    <Container>
        <img src ="img/factory.jpg" alt="factory"></img>
        <Desc>
          {/* <h1>Customized automation solutions</h1> */}
          {/* <p>Customized automation solutions</p> */}
        </Desc>
    </Container>
  )
}

export default Main

const Container = styled.div`
    height: 730px;
    width: 100%;
    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    z-index: 1;
    position: relative;
`

const Desc = styled.div`
  position: absolute;
	top: 80%;
	left: 50%;
  transform: translate( -50%, -50% );
  color: white;
  h1{
    font-size: 2.5rem;
    font-weight: 600;
   text-transform: uppercase;
  }
  p{
    font-size: 2rem;
    font-weight: 400;
   text-transform: uppercase;
  }
  /* font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase; */
`