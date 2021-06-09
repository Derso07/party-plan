// import React, { useEffect, useState, useCallback, useMemo } from 'react';
// import { isToday, format } from 'date-fns';
// import ptBR from 'date-fns/locale/pt-BR';
// import { isAfter, parseISO } from 'date-fns/esm';
// import DayPicker, { DayModifiers } from 'react-day-picker';
// import { Link, useParams } from 'react-router-dom';
// import {toast,ToastContainer} from 'react-toastify';
// import api from '../../services/api';
// import './styles.css';
// import { Calendar } from '../../components/calendar';


// function UpdateService(){
//     const params = useParams();
//     const [dataService, setDataService] = useState({name: '', description: '', address: '', price: 0});
//     const [selectedDate, setSelectedDate] = useState(new Date());
   

//     // UseEffects
//     useEffect(() => {
//         async function getService(){
//             const res = await api.get(`/services/${params._id}`);
//             setDataService(res.data);
//         }
//         getService();

//     },[]);

//     // Funções
//     function handleSubmitServiceForm(e){
//         e.preventDefault();
//         UpdateService();
//     }

//     function UpdateService() {
//         api.put(`Services/Update/${params._id}`, dataService)
//         .then((res) => {
//             toast.success('Serviço atualizado', {
//                 position: "bottom-center",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//             });
//         })
//         .catch((err) => {
//             toast.error('Não foi possivel atualizar o serviço', {
//                 position: "bottom-center",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//             });
//             console.error(err);
//         })
//     }

//     return (
//         <>
//             <div className="container-services">
//                 <Link to="/services">Voltar</Link>  
//                 <h1>Atualizar </h1>            
//                 <form onSubmit={(e) => handleSubmitServiceForm(e)}>
//                     <label htmlFor="name">Nome:</label>
//                     <input type="text" onChange={(e) => setDataService({...dataService, name: e.target.value})} defaultValue={dataService.name} />
//                     <label htmlFor="description">Descrição:</label>
//                     <input type="text" onChange={(e) => setDataService({...dataService, description: e.target.value})} defaultValue={dataService.description}/>
//                     <label htmlFor="address">Endereço:</label>
//                     <input type="text" onChange={(e) => setDataService({...dataService, address: e.target.value})} defaultValue={dataService.address}/>
//                     <label htmlFor="price">Preço:</label>
//                     <input type="number" onChange={(e) => setDataService({...dataService, price: e.target.value})} value={dataService.price}/>
//                     <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
//                     <button type="submit">Submit</button>
//                 </form>
                

//                 <ToastContainer/>
//             </div>
//         </>
//     ) 
// }

// export default UpdateService;