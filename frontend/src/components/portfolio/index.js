import React, {useState, useEffect, useRef} from 'react';
import {useSpring, animated} from 'react-spring';
import {Wrapper, Row, Fullscreen} from './style';
import {useSelector, useDispatch} from 'react-redux';
import { Transition } from 'react-transition-group';
import anime from 'animejs';
import * as animations from './animations';

export default () => {

    /** Propriedades que serão passadas para o Styled Component */
    const imageHeight = `450px`;
    const gap = `0px`;

    const dispatch = useDispatch();

    /** Animação para apresentação dos jobs */
    const animation = useSpring({to: {opacity: 1, top: 0, position: 'relative'}, from: {opacity: 0, top: 0, position: 'relative'}})
    
    /** Inicialização do State do Componente Portfólio */
    const [state, setState] = useState({detail: false});

    /** Linkagem da variável "jobs" ao estado global do Redux */
    const jobs = useSelector(state => state.jobs);
    
    /** Função que atualiza os jobs através do Redux */
    const loadJobs = () => {
        dispatch({type: `REQUEST_JOBS`, theme: 'Blender'});
    }


    /** Ao iniciar o componente */
    useEffect(() => {

        /** Carregar os jobs */
        loadJobs();

    }, []);

    
    /** Função que altera o estado local para exibir, em detalhe, o job selecionado */
    const showDetail = (image) => {
        setState({...state, detail: image});
        document.body.style.overflowY = 'hidden';
    }

    /** Função que retorna o estado local para o detalhe false */
    const closeDetail = (image) => {
        setState({...state, detail: false});
        document.body.style.overflowY = 'scroll';
        document.title = "Studios Wire | Home"
    }
    
    return(
        <React.Fragment>
            { state.detail && <Transition timeout={3000}><Detail close={ closeDetail } data={state.detail}>Teste</Detail></Transition> }
            <Wrapper gap={gap}>
                <animated.div style={animation} className="works">
                    { jobs.data && jobs.data.map( (row, key) => {

                        /** Para dispositivos menores < que 1024px de largura. */
                        if(window.innerWidth < 1024){
                            return (row.size == 1) ? (
                                <Row className="single" height={imageHeight} gap={gap}>
                                            { row.linha.map( image =>
                                                <div className="imgHolder" onClick={() => showDetail(image)}>
                                                    <img src={image.urlToImage} />
                                                    <span className="title">{image.source.name}</span>
                                                </div>)}
                                        </Row>) : (
                                            row.linha.map( image => (
                                                <Row  className="single" gap={gap} height={imageHeight}>
                                            <div className="imgHolder" onClick={() => showDetail(image)}>
                                                <img src={image.urlToImage} />
                                                <span className="title">{image.source.name}</span>
                                            </div>
                                        </Row>
                                        )
                                        )
                                        )
                                    }
                        /** Para dispositivos maiores > que 1024px de largura. */
                        return (row.size == 1) ? (
                            <Row className="single" height={imageHeight} gap={gap}>
                                { row.linha.map( image =>
                                    <div className="imgHolder" onClick={() => showDetail(image)}>
                                        <img src={image.urlToImage} />
                                        <span className="title">{image.source.name}</span>
                                    </div>)}
                            </Row>
                            ) 
                            : 
                            (<Row  className="dual" gap={gap} height={imageHeight}>
                                { row.linha.map( image =>
                                    <div className="imgHolder" onClick={() => showDetail(image)}>
                                        <img src={image.urlToImage} />
                                        <span className="title">{image.source.name}</span>
                                    </div>
                                )}
                            </Row>)
                    } ) }
                </animated.div>
                
            </Wrapper>
        </React.Fragment>
    )
}


/** Componente de detalhe do job */
const Detail = (props) => {

    /** Inicialização do estado local */
    const [state, setState] = useState({});

    /** Ao iniciar */
    useEffect( () => {

        /** Iniciar a animação "enter". */
        animations.enter('.background');

        document.title = `Studios Wire | ${props.data.title}`
    }, []);

    /** Ao alterar-se o estado de exit */
    useEffect( () => {

        /** Se verdadeiro: */
        if(state.exit == true){

            /** Iniciar animação de saída. */
            animations.leave('.background')
            /** Então, utilizar o método close herdado das propriedades. */
            .then(() => { props.close() })
        }
    }, [state.exit])

    /** Função para alterar o estado local para exit: true */
    const close = () => {
        setState({...state, exit: true});
    }

    return (
        <Fullscreen>
            
            {/** Div criada para dar efeito de transição sobreposta. */}
            <div className="background darken"></div>


            <div className="background lighten">
                <button className="close" onClick={close}>Fechar</button>
                <div className="content" style={{backgroundImage: `url(${props.data.urlToImage})`}}>
                    <div>
                        <h1>
                            {props.data.title}
                        </h1>
                        <p style={{marginTop: `20px`}}>{props.data.content}</p>
                    </div>
                </div>
            </div>
        </Fullscreen>
    )
}