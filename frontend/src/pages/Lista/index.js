import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './style.css';

export default function Lista() {
    const [correspondencias, setCorrespondencias] = useState([]);

    useEffect(() => {
        api.get('correspondencias').then(response => {
            setCorrespondencias(response.data.correspondencias);
        });
    }, []);

    function verificarEntrega(correspondencia){
        if(correspondencia.datahora_entrega != null) {
            return "Entregue"
        }
        else {
            return (
                <Link to={`/recebimento/${correspondencia.id}`}>
                    <p>Receber</p>
                </Link>
            )
        }
    };

    async function deletarCorrespondencia(id){
        const usuario_id = localStorage.getItem("user_id");

        try {
            await api.delete(`correspondencias/${id}`, {
                headers: {
                    Authorization: usuario_id,
                }
            });

            setCorrespondencias(correspondencias.filter(correspondencia => correspondencia.id !== id));

            alert(`Correspondência ${id} deletada com sucesso!`);
        } catch (err) {
            alert(`Não foi possível deletar a correspondência com o ID ${id}`);
        }
    }

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
                <tbody className='tabela'>
                    <tr className='linha-titulo'>
                        <th>Número de Identificação</th>
                        <th>Remetente</th>
                        <th>Destinatário</th>
                        <th>Descrição</th>
                        <th>Responsável</th>
                        <th>Data do Cadastro</th>
                        <th>Status</th>
                    </tr>
                        {correspondencias.slice(0).reverse().map((correspondencia, index) => (
                            <tr key={index}>
                                <th>{correspondencia.id}</th>
                                <th>{correspondencia.remetente}</th>
                                <th>{correspondencia.destinatario}</th>
                                <th>{correspondencia.descricao}</th>
                                <th>{correspondencia.usuario_cadastro}</th>
                                <th>{correspondencia.datahora_cadastro}</th>
                                <th>
                                    {verificarEntrega(correspondencia)}
                                    <span onClick={() => deletarCorrespondencia(correspondencia.id)}>Deletar</span>
                                </th>
                            </tr>
                        ))}
                </tbody>
            </div>
        </div>
    )
};