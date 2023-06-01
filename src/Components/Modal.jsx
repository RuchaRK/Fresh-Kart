import styled from '@emotion/styled';
import {React} from 'react';
import {createPortal} from 'react-dom';
import {IoMdClose} from 'react-icons/io';

const ModalContentContainer = styled.div`
  background-color: white;
  margin: 200px auto;
  width: 500px;
  padding: 1px;
  min-height: 200px;
  position: relative;
`;

const ModalWrapper = styled.div`
  background: #808080a3;
  z-index: 9999;
  top: 0;
  position: absolute;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  border-radius: 50%;
  padding: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  &:hover {
    background-color: #dbd9d9;
  }
`;

function ModalContent({children, closeModal}) {
  return (
    <ModalWrapper>
      <ModalContentContainer>
        {children}
        <CloseButton onClick={closeModal}>
          <IoMdClose />
        </CloseButton>
      </ModalContentContainer>
    </ModalWrapper>
  );
}

export function Modal({open, children, closeModal}) {
  return (
    <div>
      {open &&
        createPortal(
          <ModalContent closeModal={closeModal}>{children}</ModalContent>,
          document.getElementById('portal-root'),
        )}
    </div>
  );
}
