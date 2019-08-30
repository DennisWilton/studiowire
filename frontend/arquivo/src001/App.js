import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Dashboard from './Dashboard/Dashboard';
import MainPage from './Pages/Main/MainPage';

function App(){
	return(
		<BrowserRouter>
			<Switch>
				<Route path='/admin' component={Dashboard}></Route>
				<Route exact path='/' component={MainPage}></Route>
			</Switch>
		</BrowserRouter>
	);
}



export default App;