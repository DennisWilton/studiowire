import styled from 'styled-components';

export const Hero = styled.div`
    width: 100%;
    height: 70vh;
    background: #222 url(${props => props.image});
    background-size: cover;
    overflow: hidden;

    
    & .parallax-outer, & .parallax-inner {
        width: 100%;
    }


    &::after{
        display: block;
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 70vh;
        background: radial-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7));
    }
    
    & video {
        top: -290px;
        position: relative;
        object-fit: cover;
        width: 100%;
        object-position: 50% 50%;

        @media(orientation: portrait){
            top: -290px;
            height: 70vh;
        }
        @media(orientation: landscape){
        }

  
    }

`