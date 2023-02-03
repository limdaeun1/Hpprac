import React, {useState} from 'react'
import styled from 'styled-components';
import Header from 'components/Header';
import Main from 'components/MainPhoto';
import Box from 'components/Box';
import Intro from 'components/ProductIntro';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import Video from 'components/Video';



function App() {

  const [lang, setLang] = useState('en');

  return (

        <Body>
        <Header lang={lang} setLang={setLang}></Header>
            <Main/>
            <Box/>
            <Video/>
            <Intro lang={lang}/>
            <Contact lang={lang}/>
            <Footer/>
        </Body>
 



  );
}

export default App;

const Body = styled.div`
  background-color:white;
`

