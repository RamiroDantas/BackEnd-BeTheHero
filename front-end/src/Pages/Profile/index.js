import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FiPower, FiTrash2 } from 'react-icons/fi'
import LogoPng from '../../Assets/logo.png'
import './style.css'
import api from '../../services/api';

export default function Profile(){
    const [incidents, setIncidents] = useState([]);
    const navigate = useNavigate();
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    async function handleDelete(id){
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incidents => incidents.id !== id))

        } catch(err){
            alert("Erro ao tentar deletar caso, tente novamente.");
        }
    }

    function handleLogout(){
        localStorage.clear();
        navigate('/');        
    }

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId])

    return (
        <div className='profile-container'>
            <header>
                <img src={LogoPng} alt='Be The Hero'/>
                <span> Bem Vindo, {ongName}</span>    
                
                <Link className='button' to='/incidents/new'>Cadastrar novo caso</Link>
                <button onClick={handleLogout} type='button'>
                    <FiPower size={18} color='#E02041'/>
                </button>
            </header>

            <h1> Casos Cadastrados </h1>

           <ul> 
            {incidents.map(incidents => (
                    <li key={incidents.id}>
                        <strong>CASO:</strong>
                        <p>{incidents.title}</p>

                        <strong>Descrição:</strong>
                        <p>{incidents.description}</p>

                        <strong>Valor:</strong>
                        <p>{Intl.NumberFormat('pt-bt', {style: 'currency', currency: 'BRL'}).format(incidents.value)}</p>

                        <button onClick={() => handleDelete(incidents.id)}type='button'>
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
            ))}
            </ul>
        </div>
    ); 
}