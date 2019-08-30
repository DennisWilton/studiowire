import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Main from './Pages/Main/Main';

function ErrorPage() {
    return <div style={{padding: '50px'}}>
                <b>
                    <h1>#404</h1>> Page not found.
                </b>
        </div>
}

export default (props) => { 
    return(<>
        <Switch>
            <Route path="/admin/" exact component={ Main }></Route>
            <Route path="/admin/" component={ ErrorPage }></Route>
        </Switch>
        </>
    )
}