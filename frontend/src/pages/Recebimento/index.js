import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import api from '../../services/api';

import './style.css';

export default function Recebimento() {
    const [correspondencia, setCorrespondencia] = useState([]);
    const [usuario_entrega, setUsuario_entrega] = useState('');
    const {id} = useParams();

    useEffect(() => {
        api.get(`/correspondencias/${id}`).then(response => {
            setCorrespondencia(response.data.correspondencia[0]);
        });
    }, [id]);

    console.log(id);

    async function confirmarRecebimento(e) {
        e.preventDefault();

        const datahora_entrega = new Date().toISOString().substr(0, 10);
        const id_usuario_entrega = "302feee9"

        const dados = {
            id_usuario_entrega,
            datahora_entrega,
        }

        try {
            const resposta = await api.put(`correspondencias/${id}`, dados);

            alert(`Correspondência de número ${resposta.data.id} recebida com êxito!`);
        } catch (err) {
            alert(`Não foi possível confirmar o recebimento da correspondência.`)
        }
        
    }

    return(
        <div className="container-recebimento">
            <div className='header'>
                <Link to='/'>
                    <span className='comando'>Retornar ao menu principal</span>
                </Link>
            </div>

            <div className='titulo'>
                <h1>Receber correspondência</h1>
            </div>

            <div className="content">
             <div className='ficha'>
                <label>Remetente</label>
                <p>
                    {correspondencia.remetente}
                </p>

                <label>Destinatário</label>
                <p>
                    {correspondencia.destinatario}
                </p>

                <label>Descrição</label>
                <p>
                    {correspondencia.descricao}
                </p>

                <label>Entregue para:</label>
                <input 
                    type='text' 
                    placeholder='Nome do funcionário que recebeu a correspondência'
                    value={usuario_entrega}
                    onChange={e => setUsuario_entrega(e.target.value)}    
                />

                <button 
                    className='botao' 
                    onClick={() => confirmarRecebimento}>
                        Receber
                </button>
             </div>
            </div>
        </div>
    )
}