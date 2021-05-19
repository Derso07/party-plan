import React from 'react';
import {BrowserRouter,Switch,Redirect,Route} from 'react-router-dom';


// Import Login Pages
import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPass from './pages/ForgetPassword';

// Import Service Pages
import IndexServices from './pages/Services';
import DetailsService from './pages/Services/details';
import UpdateService from './pages/Services/update';
import CreateServices from './pages/Services/create';

import Home from './pages/Home';

import { isAuthenticated } from './services/auth';

const PrivateRoute = ({component: Component, ...rest}) => (
    // Verificando se o usúario está autenticado
    <Route 
    {...rest}
        render={props => 
            isAuthenticated() ? (
            <Component {...props}/>
            ) : (
            <Redirect to={{ pathname: "/auth", state: { from: props.location } }} />
            )
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/auth' component={Login}/>
            <Route path='/signup' component={Register}/>
            <Route path='/forgetpassword' component={ForgetPass}/>
            <PrivateRoute path='/home' component={Home}/>

            <PrivateRoute exact path='/services' component={IndexServices}/>
            <PrivateRoute path='/services/create' component={CreateServices}/>
            <PrivateRoute path='/services/update/:_id' component={UpdateService}/>
            <PrivateRoute path='/services/:_id' component={DetailsService}/>

        </Switch>
    </BrowserRouter>
)

export default Routes;