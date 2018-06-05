// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
//react busca los index primero en las carpetas

import App from './components/App';
import Counter from './components/Counter';
import Home from './components/Home';
import Page404 from './components/Page404';
import Calculadora from './components/Calculadora';

// crear una constante (AppRoutes) 

const AppRoutes = () => 
// aqui se abre el app
<App>
    {/* Switch son como los: case1 case2 (SON HIJOS DE APP)*/}
    <Switch>
        <Route path="/counter" component={Counter} />
        <Route exact path="/" component={Home} /> {/* "/" = es para q sea exacta  */}
        {/* <Route exact path="/" component={Home} */}
        <Route path= "/Calculadora" component={Calculadora}/>
        <Route component={Page404} />
        
    </Switch>
</App>;

export default AppRoutes;
