import React from 'react'
import styled from 'styled-components'

const Header = () => {

  return (
    <Container>
        <Logo>
            <img src="img/logo_full.png" alt="logo"></img>
        </Logo>
        <Category>
            <div>About Us</div>
            <img src='img/navibar.gif' alt='bar'></img>
            <div>Products</div>
            <img src='img/navibar.gif' alt='bar'></img>
            <div>Contact</div>

        </Category>
    </Container>
  )
}
export default Header

const Container = styled.div`
    background-color: white;
    height: 70px;
    display: flex;
    margin-top: 7px;
`

const Logo = styled.div`
    margin-left: 70px;
    img{
      height: 60px;
      margin-top: 3px;
    }
`

const Category = styled.div`
  /* border:2px solid red; */
  margin: auto 50px;
  display: flex;
  div{
    cursor: pointer;
    &:hover {
      color:#0326c2
   }
   font-weight: 550;
  }
`