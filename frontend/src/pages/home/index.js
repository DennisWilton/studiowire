import React, {useEffect} from 'react';
import {useSpring, animated, useTransition} from 'react-spring';
import {useScrollPercentage} from 'react-scroll-percentage';
import {useSelector, useDispatch} from 'react-redux';

import { MenuElement, MenuItem } from './style';

import Hero from '../../components/hero';
import Portfolio from '../../components/portfolio';
import Footer from '../../components/footer';


export default (props) => {
    const dispatch = useDispatch();
    const menu = useSelector(state => state.menu);
    
    const [ref, percentage] = useScrollPercentage({});
    
    const animation = useSpring({to: {opacity: 1, top: 0, position: 'relative'}, from: {opacity: 0, top: 0, position: 'relative'}})
    
    const transitions = useTransition(menu.isOpen, null, {
        from: { position: 'relative', top: 100, opacity: 0 },
        enter: { opacity: 1, top: 0 },
        leave: { opacity: 0, top: 100 },
    })

    useEffect(() => {
        document.title = "Studios Wire | Home";
    }, []);

    useEffect(() => {
        let val = 0.8;
        if(menu.isOpen && percentage >= val){
            dispatch({type: "MENU_CLOSE"})
        }

        if(!menu.isOpen && percentage <= val){
            dispatch({type: "MENU_OPEN"});
        }
    }, [percentage])
    
    return(
        <React.Fragment>
            <animated.div ref={ref} style={animation}>
                <Hero></Hero>
            </animated.div>

            { transitions.map(({item, key, props}) => {
                return (item) ? (<animated.div key={key} style={props}><Menu/></animated.div>) : (null);
            }) }

            <Portfolio></Portfolio>

            <Footer></Footer>
            
        </React.Fragment>
    )
}


function Menu(){

    return(
        <React.Fragment>
            <MenuElement>
                <MenuItem>Works</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>
            </MenuElement>
        </React.Fragment>
    )
}