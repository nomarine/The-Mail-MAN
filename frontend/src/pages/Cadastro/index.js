import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Cadastro() {
    return (
        <div className='cadastro-container'>
            <div className='header'>
                <Link to='/'>
                    <span className='comando'>Retornar ao menu principal</span>
                </Link>
            </div>

            <div className='titulo'>
                <h1>Cadastro de Correspondências</h1>
            </div>

            <div className='content'>
                <form className='formulario'>
                    <label>Remetente</label>
                    <input type='text' placeholder='Coloque o nome do remetente'/>

                    <label>Destintário</label>
                    <input type='text' placeholder='Coloque o nome do destintário'/>

                    <label>Descrição</label>
                    <input type='text' placeholder='Descreva a motivação do recebimento da correspondência'/>

                    <label>Data de Entrada</label>
                    <input className="data" type='date' placeholder='Descrição'/>

                    <button className='botao' onClick="">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}