import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './style.css';
import api from '../../services/api';

export default function Cadastro() {
    const [remetente, setRemetente] = useState('');
    const [destinatario, setDestinatario] = useState('');
    const [descricao, setDescricao] = useState('');
    const [data, setData] = useState('');

    const history = useHistory();
    
    let hoje = new Date().toISOString().substr(0, 10);

    async function cadastrarCorrespondencia(e) {
        e.preventDefault();

        const cadastro_usuario_id = localStorage.getItem('user_id');

        const dados = {
            cadastro_usuario_id,
            remetente,
            destinatario,
            descricao,
            data,
        };

        try {
            const resposta = await api.post('correspondencias', dados, {
                headers: {
                    Authorization: cadastro_usuario_id
                }
            });
            alert(`Correspondência ${resposta.data.id} cadastrada com sucesso!`);
            history.push('/lista');
        } catch (err) {
            alert('Ops, algo deu errado. Reveja os dados e tente novamente.');            
        }

    }

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
                <form className='formulario' onSubmit={cadastrarCorrespondencia}>
                    <label>Remetente</label>
                    <input 
                        type='text' 
                        placeholder='Coloque o nome do remetente'
                        value={remetente}
                        onChange={e => setRemetente(e.target.value)}    
                    />

                    <label>Destintário</label>
                    <input 
                        type='text' 
                        placeholder='Coloque o nome do destintário'
                        value={destinatario}
                        onChange={e => setDestinatario(e.target.value)}    
                    />

                    <label>Descrição</label>
                    <input 
                        type='text' 
                        placeholder='Descreva a motivação do recebimento da correspondência'
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}    
                    />

                    <label>Data de Entrada</label>
                    <input 
                        className="data" 
                        id="calendario"
                        type='date' 
                        max={hoje}
                        onChange={e => setData(e.target.value)}
                    />

                    <button className='botao' type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}