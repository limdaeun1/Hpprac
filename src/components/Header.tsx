import React, {useState} from 'react'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

interface HeaderProps {
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>
}

const Header = ({lang , setLang }: HeaderProps) => {

 

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
            <img src='img/navibar.gif' alt='bar'></img>
            {lang === 'en' ? 
           <ChangeLang onClick={()=>setLang('kr')}>Korean</ChangeLang> : <ChangeLang onClick={()=>setLang('en')}>English</ChangeLang> }
          
          {/* <button><Link to="/">스크롤 테스트</Link></button> */}
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
    position: sticky;
    top: 0px;
    z-index:3;
    width: 100%;
`

const Logo = styled.div`
    margin-left: 70px;
    img{
      height: 60px;
      margin-top: 3px;
    }
`

const Category = styled.div`
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

const ChangeLang = styled.div`
  color:gray;
  cursor: pointer;
  &:hover {
      color:#474646
  }
`