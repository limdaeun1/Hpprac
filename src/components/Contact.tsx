import React from 'react'
import styled from 'styled-components'

interface ContactProps {
    lang: string
}

const Contact = ({lang}:ContactProps) => {
     
  return (
    <Container className='contact'>
        <Title>
           <h1>Contact Us</h1>
        </Title>
        <Desc>
           <Body1>
                <h3>Adress</h3><p>Shihwa Complex, MTV Industrial Complex, 2Sa 703. Jungwang-Dong, Siheung Si, Gyeonggi-Do, Korea</p>
           </Body1>
           <Body1>
                <h3>Phone</h3><p>+82-(0)31-431-6297/6298</p>
           </Body1>
           <Body1>
                <h3>Fax</h3><p>+82-(0)31-431-6081</p>
           </Body1>
           <Body1>
                <h3>E-mail</h3><p>inquiry@woosungautocon.com</p>
           </Body1>
        </Desc>
    </Container>
  )
}

export default Contact

const Container = styled.div`
    height: 500px;
    background-color: #303070;
`

const Title = styled.div`
    padding-top: 20px;
    h1{
        color:white;
        text-align: center;
    }
`

const Desc = styled.div`
    min-height: 300px;
`

const Body1 = styled.div`
    display: flex;
    align-items: center;
    color:white;
    h3{
        margin-right: 50px;
        margin-left: 20%;
    }
`
