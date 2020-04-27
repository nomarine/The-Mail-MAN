import React from 'react';

import './style.css';

function Header() {
    return (
        <header>
            <div className="titulo-header">
                <h1>Mail MAN</h1>
            </div>

            <div className="sessao">
                <span>Usuário: Rafael</span>
            </div>
        </header>
    )
}

export default Header;