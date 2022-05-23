import React from "react";
import LogoPng from '../../Assets/logo.png'
import './styles.css'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../services/api";


export default function Register(){
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const ongId = localStorage.getItem('ongId');

    async function handleCreate(data){

        try{
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });
            navigate('/profile')
            
        } catch(err){
            alert('Erro ao cadastrar caso, tente cadastrar novamente');
        }
      
    }

    function handleClick() {
        navigate('/profile')
      }



    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={LogoPng} alt='Be The Hero'/>
                    <h1> Cadastro novo caso </h1>
                    <p>Descreva o caso detadalhadamente para encontrar um heroí para resolver isso.</p>
                </section>  

                <form onSubmit={handleSubmit(handleCreate)}>
                    <input placeholder="Título do Caso" {...register('title')}/>
                    <textarea placeholder="Descrição do Caso"{...register('description')}/>
                    <input placeholder="Valor em Reais"{...register('value')}/>

                    <div className="input-group">
                        <button className="cancelButton" onClick={handleClick}> Cancelar </button>
                        <button className="button" type="submit" style={{ width: 300}}> Cadastrar </button>
                    </div>
                </form>
            </div>
        </div>
    )
}