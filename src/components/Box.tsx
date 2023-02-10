import styled from 'styled-components'


const Box = () => {

  return (
    <>
    <Container>
        <Smallbox>
          <h2>Planning</h2>
          <p>We have a design process that ensures projects are being considered not just for the now, but the future as well.</p>
        </Smallbox>
        <Smallbox>
          <h2>Automation</h2>
          <p>WSA USA offers industry 4.0 automation control to assist customers at any stage.</p>
        </Smallbox>
        <Smallbox>
          <h2>Innovation</h2>
          <p>We create the most efficient and productive material handling solutions to deploy in the most advanced 4.0 Industry smart factories in the world.</p>
        </Smallbox>
    </Container>
    </>
  )
}

export default Box

const Container = styled.div`
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.3) 2px 4px 15px;
    height: 270px;
    width: 75%;
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: -100px;
    margin-bottom: 100px;
    z-index: 2;
    position: relative;
`

const Smallbox = styled.div`
    border: 1px solid #e6e0e0;
    flex:1;
    text-align: center;
    h2{
      color: #210f86;
      align-items: center;
      text-transform: uppercase;
    }
    p{
      color:gray;
      padding:0 20px 0 20px;
    }
    cursor: pointer;
    &:hover {
        h2{
            color:#b41c02;
          }
    }
`