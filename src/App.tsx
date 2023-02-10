import React, {useState , useEffect, useCallback } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from 'components/Header';
import Main from 'components/MainPhoto';
import Box from 'components/Box';
import ProductIntro from 'components/ProductIntro';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import Video from 'components/Video';
import Modal from 'components/Modal';
import Solutions from 'components/Solutions';
import { TitleDummy } from 'data/Title';

function App() {
  const navigate = useNavigate();

  const [lang, setLang] = useState('en');
 
  const removeNavigate = () => {
    navigate('/')
  }

  useEffect(() => {
    document.title = TitleDummy[lang].title;
  }, [lang]);

  return (
        <>
            <Modal>test</Modal>
            <Container onWheel={removeNavigate}>
              <Body>
              <Header lang={lang} setLang={setLang}></Header>
              <Main/>
              <Box/>
              <Video/>
              <Solutions/>
              <ProductIntro lang={lang}/>
              <Contact lang={lang}/>
              <Footer/>
              </Body>
            </Container>
        </>
 



  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`

const Body = styled.div`
  background-color:white;
  min-width: 1200px;
`

