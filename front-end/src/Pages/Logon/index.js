import React, { useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import LogoPng from '../../Assets/logo.png'
import HeroesPng from '../../Assets/heroes.png'
import { Link } from 'react-router-dom'
import './styles.css'
import api from '../../services/api';
import { useNavigate } from 'react-router-dom'

export default function Logon(){
    const [id, setId] = useState('');
    const navigate = useNavigate();

    async function handleAuth(e){
        e.preventDefault();

        try {
            const response = await api.post('login', {id});
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            navigate('/profile')

        } catch (err){
            alert('Falha no login, tente novamente.')
        }
    }

    return (
        <div className='logon-container'>
            <section className='form'>
                <img src={LogoPng} alt='Be The Hero'/>
                <form onSubmit={handleAuth}>
                    <h1>Faça seu Login</h1>
                    <input
                    type='text'
                    placeholder='Sua ID'
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />
                    <button type='submit' className='button'> Entrar </button>

                    <Link to='/register' className='back-link'>
                        <FiLogIn size={16} color='#E02041'/>
                        Não tenho Registro
                    </Link>
                </form>
            </section>

            <img src={HeroesPng} alt='Heroes'/>
        </div>
    )

}
