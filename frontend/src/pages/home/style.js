import styled from 'styled-components';

export const MenuElement = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    top: -100px;
    position: absolute;   
    padding-right: 10vw;
    padding-left: 10vw;
`

export const MenuItem = styled.button`
    background: transparent;
    color: white;
    padding: 15px 30px;
    border: none;
    // border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    font-family: "Roboto", sans-serif;


    @media(max-width: 640px){
        font-size: 0.75em;
    }

    &:hover{
        background: rgba(255,255,255,0.05);
        color: #FFF;
    }
`