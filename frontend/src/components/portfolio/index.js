import React, {useState, useEffect} from 'react';
import {useSpring, animated} from 'react-spring';
import {Wrapper, Row} from './style';
import {useSelector, useDispatch} from 'react-redux';

export default () => {
    const imageHeight = `450px`;
    const gap = `0px`;
    const dispatch = useDispatch();
    const animation = useSpring({to: {opacity: 1, top: 0, position: 'relative'}, from: {opacity: 0, top: 0, position: 'relative'}})
    
    const jobs = useSelector(state => state.jobs);
    
    const loadJobs = () => {
        dispatch({type: `REQUEST_JOBS`, theme: 'Blender'});
    }

    useEffect(() => {
        loadJobs();
    }, []);

    useEffect(() => {
        console.log(jobs);
    }, [jobs]);
   
    return(
        <React.Fragment>
            <Wrapper gap={gap}>
                <animated.div style={animation} className="works">
                    { jobs.data && jobs.data.map( (row, key) => {
                        if(window.innerWidth < 1024){
                            return (row.size == 1) ? (
                                <Row className="single" height={imageHeight} gap={gap}>
                                            { row.linha.map( image =>
                                                <div className="imgHolder">
                                                    <img src={image.largeImageURL} />
                                                    <span className="title">{image.user}</span>
                                                </div>)}
                                        </Row>) : (
                                    row.linha.map( image => (
                                        <Row  className="single" gap={gap} height={imageHeight}>
                                            <div className="imgHolder">
                                                <img src={image.largeImageURL} />
                                                <span className="title">{image.user}</span>
                                            </div>
                                        </Row>
                                        )
                                    )
                                )
                        }
                            return (row.size == 1) ? (
                                        <Row className="single" height={imageHeight} gap={gap}>
                                            { row.linha.map( image =>
                                                <div className="imgHolder">
                                                    <img src={image.largeImageURL} />
                                                    <span className="title">{image.user}</span>
                                                </div>)}
                                        </Row>
                                        ) 
                                        : 
                                        (<Row  className="dual" gap={gap} height={imageHeight}>
                                            { row.linha.map( image =>
                                                <div className="imgHolder">
                                                    <img src={image.largeImageURL} />
                                                    <span className="title">{image.user}</span>
                                                </div>
                                            )}
                                        </Row>)
                    } ) }
                </animated.div>
                
            </Wrapper>
        </React.Fragment>
    )
}