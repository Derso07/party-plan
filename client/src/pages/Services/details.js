import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

function DetailsService(){

    const params = useParams();
    const [service, setService] = useState({name: '', description: '', address: '', price: 0});

    useEffect(() => {
        async function getService(){
            const res = await api.get(`/services/${params._id}`);
            setService(res.data);
        }
        getService();
    },[]);

    async function handleDeleteService(){
        await api.delete(`Services/Delete/${params._id}`)
    }

    return (
        <>
        <div>
            <h1> Details Service </h1>
        </div>
            <div>
                <p><b>Nome :</b>{service.name}</p>
                <p><b>Descrição :</b>{service.description}</p>
                <p><b>Endereço :</b>{service.address}</p>
                <p><b>Preço :</b>{service.price}</p>
            </div>
            <div>
                <Link to="/services">Voltar</Link>
                <Link to={`/services/update/${params._id}`}>
                <button>Atualizar</button>
                </Link>
                <button onClick={() => handleDeleteService()}>Excluir</button>
            </div>
        </>
    )
}

export default DetailsService;