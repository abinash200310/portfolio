import React from 'react';
import styled, { keyframes } from 'styled-components';
import "../All css/Home.css";
import Button from 'react-bootstrap/Button';
import CommonNav from "../Common/CommonNav";
<CommonNav/>

const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const fall = keyframes`
  to {
    transform: translate3d(-30em, 0, 0);
  }
`;

const tailFade = keyframes`
  0%, 50% {
    width: var(--star-tail-length);
    opacity: 1;
  }

  70%, 80% {
    width: 0;
    opacity: 0.4;
  }

  100% {
    width: 0;
    opacity: 0;
  }
`;

const blink = keyframes`
  50% {
    opacity: 0.6;
  }
`;

const StarsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  transform: rotate(-45deg);
`;

const Star = styled.div`
  --star-color: #fff;
  --star-tail-length: 6em;
  --star-tail-height: 2px;
  --star-width: calc(var(--star-tail-length) / 6);
  --fall-duration: 9s;
  --tail-fade-duration: var(--fall-duration);
  position: absolute;
  top: var(--top-offset);
  left: 0;
  width: var(--star-tail-length);
  height: var(--star-tail-height);
  color: var(--star-color);
  background: linear-gradient(45deg, currentColor, transparent);
  border-radius: 50%;
  filter: drop-shadow(0 0 6px currentColor);
  transform: translate3d(104em, 0, 0);
  animation: ${fall} var(--fall-duration) var(--fall-delay) linear infinite, ${tailFade} var(--tail-fade-duration) var(--fall-delay) ease-out infinite;

  @media screen and (max-width: 750px) {
    animation: ${fall} var(--fall-duration) var(--fall-delay) linear infinite;
  }

  &::before, &::after {
    position: absolute;
    content: '';
    top: 0;
    left: calc(var(--star-width) / -2);
    width: var(--star-width);
    height: 100%;
    background: linear-gradient(45deg, transparent, currentColor, transparent);
    border-radius: inherit;
    animation: ${blink} 2s linear infinite;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;
const openResume = () => {
  window.open('/images/Abinash.pdf', '_blank');
  };
const StarsAnimation = () => {
  const stars = Array.from({ length: 50 }).map((_, i) => {
    const style = {
      '--star-tail-length': `${randomRange(500, 750) / 100}em`,
      '--top-offset': `${randomRange(0, 10000) / 100}vh`,
      '--fall-duration': `${randomRange(6000, 12000) / 1000}s`,
      '--fall-delay': `${randomRange(0, 10000) / 1000}s`,
    };
    return <Star key={i} style={style} />;
  });

  return <StarsContainer>{stars}</StarsContainer>;
};

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%);
  overflow: hidden;
  position: relative;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  font-size: 30px;
  z-index: 1;
  padding: 20px;
  // background-color: red; /* Optional: Add background for better readability */
  border-radius: 10px;
`;

const App = () => (
  <AppContainer>
    <StarsAnimation />
    <TextOverlay>
    <div>  Hello,I'm <span className='highlight'>Abinash.A</span><br />I'm a full-stack web developer. <br />
    
    </div>
    <div className=' d-flex justify-content-center gap-5'>
    <Button href='about' className='p-2 fs-3 vmp glowing-btn'>View my Portfolio</Button>
<Button className='p-2 fs-3 vmp glowing-btn' onClick={openResume}> View my Resume</Button>
    </div>
      </TextOverlay>
     
  </AppContainer>
  
);

export default App;