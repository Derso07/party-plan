import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {toast,ToastContainer} from 'react-toastify';
import api from '../../services/api';
import './styles.css';


function CreateServices(){
    // Variaveis
    const [dataService, setDataService] = useState({name: '', description: '', address: '', price: 0});

    // UseEffects
    useEffect(() => {
        console.log('data service atualizado:', dataService)
    },[dataService])

    // Funções
    function handleSubmitServiceForm(e){
        e.preventDefault();
        CreateService();
    }

    function CreateService() {
        api.post('Services/Create', dataService)
        .then((res) => {
            toast.success('Serviço criado', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
        .catch((err) => {
            toast.error('Não foi possivel criar o serviço', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.error(err);
        })
    }

    return (
        <>
        <div className="container-services">
            <Link to="/services">Voltar</Link>            
            <div>
                <h1>Criar Anúncio</h1>
            </div>
            <form onSubmit={(e) => handleSubmitServiceForm(e)}>
                <label htmlFor="name">Nome:</label>
                <input type="text" onChange={(e) => setDataService({...dataService, name: e.target.value})} />
                <label htmlFor="description">Descrição:</label>
                <input type="text" onChange={(e) => setDataService({...dataService, description: e.target.value})}/>
                <label htmlFor="address">Endereço:</label>
                <input type="text" onChange={(e) => setDataService({...dataService, address: e.target.value})}/>
                <label htmlFor="price">Preço:</label>
                <input type="number" onChange={(e) => setDataService({...dataService, price: e.target.value})}/>
                <button type="submit">Submit</button>
            </form>

            <ToastContainer/>
        </div>    
        </>
    ) 
}

export default CreateServices;