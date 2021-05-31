import React, { useEffect, useState } from 'react';
import { Calendar } from "react-multi-date-picker"
import DatePicker, { DateObject, getAllDatesInRange } from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import {Link} from 'react-router-dom';
import {toast,ToastContainer} from 'react-toastify';
import api from '../../services/api';
import './styles.css';


function CreateServices(){
    // Variaveis
    const [dataService, setDataService] = useState({name: '', description: '', address: '', price: 0});
    const [dates, setDates] = useState([])
    const [allDates, setAllDates] = useState([])

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
                <Calendar 
                    range
                    value={dates}
                    minDate={new DateObject().toFirstOfMonth()}
                    maxDate={new DateObject().toLastOfMonth()}
                    onChange={dateObjects => {
                        setDates(dateObjects)
                        setAllDates(getAllDatesInRange(dateObjects))
                    }}
                    plugins={[
                        <DatePanel eachDaysInRange />
                    ]}
                    months={[
                        "Jan", 
                        "Fev", 
                        "Mar", 
                        "Abr", 
                        "Mai", 
                        "Jun", 
                        "Jul", 
                        "Ago", 
                        "Set", 
                        "Out", 
                        "Nov", 
                        "Dez"
                      ]}
                      weekDays={[
                        "Dom", 
                        "Seg", 
                        "Ter", 
                        "Qua", 
                        "Qui", 
                        "Sex", 
                        "Sab"
                      ]}

                />
                {dates.length > 1 &&
                    <div>
                    <h5>
                        Todos os dias entre: {dates[0].format("DD/MM/YYYY")} e {dates[1].format("DD/MM/YYYY")}:
                    </h5>
                    <ul>
                        {allDates.map((date, index) => <li key={index}>{date.format("DD/MM/YYYY")}</li>)}
                    </ul>
                    </div>    
                }
                <button type="submit">Submit</button>
            </form>

            <ToastContainer/>
        </div>    
        </>
    ) 
}

export default CreateServices;