import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function MenuPrincipal() {
    return(
        <div className='menu-principal-container'>
            <ul className='lista'>
                <Link to="/cadastro">
                    <li>Cadastrar correspondência</li>
                </Link>
                <Link to="/lista">
                    <li>Listar correspondência</li>
                </Link>
            </ul>
        </div>
    )
}

export default MenuPrincipal;