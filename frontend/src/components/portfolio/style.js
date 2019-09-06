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