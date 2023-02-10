import React, { PropsWithChildren } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";

interface ModalDefaultType {
}

function Modal({children}: PropsWithChildren<ModalDefaultType>) {
  const location = useLocation();
  const navigate = useNavigate();


  if (location.search === '') {
    return null;
  }

  return (
    <ModalContainer>
      <DialogBox>{children}</DialogBox>
      <Backdrop
        onClick={() => navigate('/')}
      />
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

const DialogBox = styled.dialog`
  width: 1200px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.4);
`;

export default Modal;

