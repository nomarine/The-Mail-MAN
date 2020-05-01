import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MenuPrincipal from './pages/MenuPrincipal';
import Cadastro from './pages/Cadastro';
import Lista from './pages/Lista';
import Recebimento from './pages/Recebimento';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MenuPrincipal}/>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/lista" component={Lista}/>
                <Route path="/recebimento" component={Recebimento}/>
            </Switch>
        </BrowserRouter>
    )
}