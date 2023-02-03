import React from 'react'
import styled from 'styled-components'
import ReactPlayer from "react-player";

const Video = () => {

  return (

    <Container>
        <Videowrap>
            <ReactPlayer
                    className="react-player"
                    url={[
                    "https://youtu.be/6YC6NJ_kHQ8" ,
                    "https://youtu.be/NTq7N812_mw"
                    ]} // 플레이어 url
                    width="855px" // 플레이어 크기 (가로)
                    height="480px" // 플레이어 크기 (세로)
                    playing={true} // 자동 재생 on
                    muted={true} // 자동 재생 on
                    light={false} // 플레이어 모드
                    pip={true} // pip 모드 설정 여부
                />
        </Videowrap>
        <Textbox>    
            <h2>TextBox</h2>
        </Textbox>
    </Container>
  
    )
}

export default Video

const Container = styled.div`
    margin-bottom: 120px;
    background-color: #303070;
    min-height: 600px;
    display: flex;
    justify-content: space-around;
`

const Videowrap = styled.div`
    width:855px;
    justify-content: center;
    align-items :center;
    text-align: center;
    position: relative;
    top: 60px;
    max-height: 480px;
`

const Textbox = styled.div`
    border:2px solid white;
    width: 500px;
    max-height: 480px;
    position: relative;
    top: 60px;
    h2 {
        color: white;
        margin:10px;
    }
`