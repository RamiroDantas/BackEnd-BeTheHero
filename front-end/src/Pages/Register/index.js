import React from "react";
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from "react-router-dom";
import LogoPng from '../../Assets/logo.png'
import './styles.css'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function Register(){
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    async function handleCreate(data){

        try{
            const response = await api.post('ongs', data);
            alert(`Seu ID de acesso ${response.data.id}`);
            navigate('/')
            
        } catch(err){
            alert('Erro no seu cadastro, tente cadastrar novamente');
        }
      
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={LogoPng} alt='Be The Hero'/>
                    <h1> Cadastro </h1>
                    <p> Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link to='/' className="back-link">
                        <FiArrowLeft size={16} color='#E02041'/>
                        Volte para o login
                    </Link>
                </section>  

                <form onSubmit={handleSubmit(handleCreate)}>
                    <input placeholder="Nome da Ong" {...register('name')}/>
                    <input type= "email" placeholder="Email" {...register('email')}/>
                    <input placeholder="Whatsapp" {...register('whatsapp')}/>

                    <div className="input-group">
                        <input placeholder="Cidade" {...register('city')}/>
                        <input placeholder="UF" style={{ width: 80}} {...register('uf')}/>
                    </div>
                    <button className="button" type="submit"> Cadastrar </button>
                </form>
            </div>
        </div>
    )
}