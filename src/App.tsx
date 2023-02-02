import React, {useState} from 'react'
import styled from 'styled-components';
import Header from 'components/Header';
import Main from 'components/MainPhoto';
import Box from 'components/Box';
import Intro from 'components/ProductIntro';
import Contact from 'components/Contact';
import Footer from 'components/Footer';



function App() {

  const [lang, setLang] = useState('en');

  return (
    <Body>
      {lang === 'en' ? 
        <ChangeLang onClick={()=>setLang('kr')}>Korean</ChangeLang>  
        :
        <ChangeLang onClick={()=>setLang('en')}>English</ChangeLang> }
    <Header></Header>
    <Main></Main>
    <Box></Box>
    <Text></Text>
    <Intro lang={lang}></Intro>
    <Contact lang={lang}></Contact>
    <Footer></Footer>
    </Body>
  );
}

export default App;

const Body = styled.div`
  background-color:white;
`

const Text = styled.div`
  h1{
    text-align: center;
    color:#706d6d;
  }
`

const ChangeLang = styled.div`
  float: right;
  margin-right: 30px;
  color:gray;
  cursor: pointer;
  &:hover {
      color:#474646
    }
`