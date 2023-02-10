import styled from 'styled-components'
import Card from './Card'
import Swiperslider from './Swiperslider'



interface IntroProps {
    lang: string
}


const Intro = ({lang}: IntroProps) => {

  return (
    <>
    <Title className='products'>Products</Title>
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
  margin: 30px 20px;
  border: 1px solid #c2b8b8;
`

const Container = styled.div`
    height: 700px;
    /* justify-content: space-between; */
    /* align-items: center; */
    margin-bottom: 100px;
    /* display: flex; */
    overflow: hidden;
`
// const Cardbox = styled.div`
//     border:2px solid black;
//     min-width: 33.3%;
//     height: 600px;
//     display: flex;
// `

