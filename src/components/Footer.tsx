import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
      <div>
        <img src='http://www.woosungautocon.com/images/bottom.gif' alt='wsa'></img>
      </div>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    height: 100px;
    text-align: center;
    margin-top: 40px;
    max-width: 1500px;
    
`