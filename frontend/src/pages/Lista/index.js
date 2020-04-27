import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Lista() {
    return (
        <div className="container-lista">

            <div className='header'>
                <Link to='/'>
                    <span className='comando'>Retornar ao menu principal</span>
                </Link>
            </div>

            <div className='titulo'>
                <h1>Lista de Correspondências</h1>
            </div>

            <div className='content'>
            
                <td className='tabela'>
                    <tr className='linha-titulo'>
                        <th>Remetente</th>
                        <th>Destinatário</th>
                        <th>Descrição</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <th>Daniel Moura</th>
                        <th>PMT</th>
                        <th>Ret. Área 213</th>
                        <th>Entregue</th>
                    </tr>
                    <tr>
                        <th>Rafael Fijos</th>
                        <th>Escriba</th>
                        <th>Replicação física</th>
                        <th>Receber</th>
                    </tr>
                    <tr>
                        <th>Sabrina Chaves</th>
                        <th>MDR Contabilidade</th>
                        <th>Ata de Reunião Jacarandá</th>
                        <th>Receber</th>
                    </tr>
                </td>
            </div>
        </div>
    )
};