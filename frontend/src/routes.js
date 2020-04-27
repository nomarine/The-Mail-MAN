import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MenuPrincipal from './pages/MenuPrincipal';
import Cadastro from './pages/Cadastro';
import Lista from './pages/Lista';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MenuPrincipal}/>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/lista" component={Lista}/>
            </Switch>
        </BrowserRouter>
    )
}