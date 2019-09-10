import styled from 'styled-components';

export const Wrapper = styled.div`
    background: #222;
    color: #FFF;
    padding: ${props => props.gap};
    font-size: 2em;
    width: 100%;
    min-height: 800px;
    z-index: 10;
    position: relative;


    & .works {
        display: grid;
        
    }
`
export const Row = styled.div`
    width: 100%;
    height: ${props => props.height}
    overflow: hidden;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    @media (max-width: 750px){
        height: calc(${props => props.height} / 2)
    }
    
    & .imgHolder {
        width: 100%;
        position: relative;
        height: 100%;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        
            & img {
                width: 100%;
                height: auto;
                
                @media (max-width: 750px){
                    height: 100%;
                    width: auto;
                }

                
                transition: transform 0.5s ease-in-out;
            }

            &::before{
                content: "";
                display: block;
                position: absolute;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                z-index: 1000;
                transition: background 0.5s ease-in-out;
            }
        

            &:hover img{
                transform: scale(1.05);
            }

            &:hover span.title {
                bottom: 30px;
                background: rgba(0, 0, 0, 0.5);
            }

            &:hover::before{
                background: transparent;
            }


            & span.title {
                position: absolute;
                color: white;
                z-index: 1001;
                cursor: default;
                bottom: 50%;
                padding: 10px 30px;
                background: transparent;
                transition: all 0.5s ease-in-out;
                border-radius: 8px;
            }
        
    }
`

export const Fullscreen = styled.div`
    width: calc(100%);
    height: calc(100%);
    display: block;
    position: fixed;
    top: 0;
    z-index: 1000;
    overflow-y: scroll;
    overflow-x: hidden;
    
    & .background {
        width: 100%;
        min-height: 100%;
        display: block;
        opacity: 0;

        padding: 50px;

        position: relative;

        &.darken {
            position: absolute;
        }

        &.lighten {
        }

        & .close{
            display: flex;
            width: auto;
            padding: 20px;
            justify-content: center;
            align-items: center;
            background: darkred;
            position: absolute;
            top: 20px;
            right: 20px;
            cursor: pointer;
            z-index: 10;
            border: none;
            color: #fff;
            
            &:hover{
                background: red;
            }
        }

        & .content{
            width: calc(100% + 100px);
            min-height: 100vh;
            background-size: cover;
            background-position: center;
            margin: -50px;
            padding: 50px;
            padding-top: 100px;
            &::after{
                position: absolute;
                top: 0;
                left: 0;
                content: "";
                width: calc(100%);
                z-index: 1;
                height: 100%;
                background: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.5));
            }

            & div{
                position: relative;
                z-index: 2;
                text-align: justify;
            }
        }
        
        }
    }
`