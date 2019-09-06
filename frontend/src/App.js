import React, { useEffect } from 'react';
import {useSpring, animated} from 'react-spring';
import {useSelector, useDispatch} from 'react-redux';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

/** Import pages */
import Home from './pages/home';

export default () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home } />
            </Switch>
        </BrowserRouter>
    )
}