import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';
import './styles.css';

function IndexServices (){

    const [allServices, setAllServices] = useState([]);

    console.log('Todos os serviços cadastrados: ', allServices);

    useEffect(() => {
        async function getAllServices(){
            const res = await api.get('/services');
            setAllServices(res.data);
        }
        getAllServices();
    },[]);

    return (
        <div>
            <ul>
                {
                    allServices.length !== 0 ? (
                        <>
                        {
                            allServices.map((item,index,array) => (
                                <Link to={`/services/${item._id}`}>
                                <li key={index}>
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <p>{item.address}</p>
                                    <p>{item.price}</p>
                                </li>
                                </Link>
                            ))
                        }
                        </>
                    ) : (
                        <p>Não existe nenhum serviço cadastrado</p>
                    )
                }
            </ul>
            <Link to="/services/create">Create</Link>
        </div>
    )
}

export default IndexServices;