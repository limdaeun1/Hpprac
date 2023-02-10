import React, {useEffect} from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>
}

const Header = ({lang , setLang }: HeaderProps) => {
  const location = useLocation();

  useEffect(() => {
    // if (location.pathname === '/main') {
    //     document.querySelector('.main')?.scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
    // }
    if (location.pathname === '/about') {
      document.querySelector('.video')?.scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
    }
    if (location.pathname === '/solutions') {
      document.querySelector('.solutions')?.scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
    }
    if (location.pathname === '/products') {
      document.querySelector('.products')?.scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
    }
    if (location.pathname === '/contact') {
      document.querySelector('.contact')?.scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
    }
    
  }, [location.pathname]);

  return (
    <Container>
        <Logo>
            <img src="img/logo_full.png" alt="logo"></img>
        </Logo>
        <Category>
            <StyledLink to ='/about'><div>About</div></StyledLink>
            <img src='img/navibar.gif' alt='bar'></img>
            <StyledLink to ='/solutions'><div>Solutions</div></StyledLink>
            <img src='img/navibar.gif' alt='bar'></img>
            <StyledLink to ='/products'><div>Products</div></StyledLink>
            <img src='img/navibar.gif' alt='bar'></img>
            <StyledLink to ='/contact'><div>Contact</div></StyledLink>
            <img src='img/navibar.gif' alt='bar'></img>
            {lang === 'en' ? 
           <ChangeLang onClick={()=>setLang('kr')}>Korean</ChangeLang> : <ChangeLang onClick={()=>setLang('en')}>English</ChangeLang> }
        </Category>
    </Container>
  )
}
export default Header

const Container = styled.div`
    background-color: white;
    height: 70px;
    display: flex;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

