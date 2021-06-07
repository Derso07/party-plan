// import React, { useEffect, useState } from 'react';
// import { Calendar } from "react-multi-date-picker"
// import DatePicker, { DateObject, getAllDatesInRange } from "react-multi-date-picker"
// import DatePanel from "react-multi-date-picker/plugins/date_panel"
// import { Link, useParams } from 'react-router-dom';
// import {toast,ToastContainer} from 'react-toastify';
// import api from '../../services/api';
// import './styles.css';


// function UpdateService(){
//     const [dataService, setDataService] = useState({name: '', description: '', address: '', price: 0});
//     const [dates, setDates] = useState([])
//     const [allDates, setAllDates] = useState([])

//     const params = useParams();

//     // UseEffects
//     useEffect(() => {
//         async function getService(){
//             const res = await api.get(`/services/${params._id}`);
//             setDataService(res.data);
//         }
//         getService();

//         const reservas = localStorage.getItem('@partyplan/reservas')
//         if(reservas!== null){
//         if (reservas.length > 0 ){
//             setDates([reservas])
//             console.log(reservas)
//         }}
        
//         const reservas2 = localStorage.getItem('@partyplan/todasReservas')
//         if(reservas2!== null){
//         if (reservas2.length > 0 ){
//             setAllDates([reservas2])
//             console.log(reservas)
//         }}
//     },[]);

//     // Funções
//     function handleSubmitServiceForm(e){
//         localStorage.setItem('@partyplan/reservas' ,  dates );
//         localStorage.setItem('@partyplan/todasReservas' ,  allDates );
//         e.preventDefault();
//         UpdateService();
//         console.log(dates, allDates)
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
//                     <Calendar 
//                     range
//                     value={dates}
//                     minDate={new DateObject().toFirstOfMonth()}
//                     maxDate={new DateObject().toLastOfMonth()}
//                     onChange={dateObjects => {
//                         setDates(dateObjects)
//                         setAllDates(getAllDatesInRange(dateObjects))
//                     }}
//                     plugins={[
//                         <DatePanel eachDaysInRange />
//                     ]}
//                     months={[
//                         "Jan", 
//                         "Fev", 
//                         "Mar", 
//                         "Abr", 
//                         "Mai", 
//                         "Jun", 
//                         "Jul", 
//                         "Ago", 
//                         "Set", 
//                         "Out", 
//                         "Nov", 
//                         "Dez"
//                       ]}
//                       weekDays={[
//                         "Dom", 
//                         "Seg", 
//                         "Ter", 
//                         "Qua", 
//                         "Qui", 
//                         "Sex", 
//                         "Sab"
//                       ]}

//                 />
//                 { {dates.length > 1 &&
//                     <div>
//                     <h5>
//                         Todos os dias entre: {dates[0].format("DD/MM/YYYY")} e {dates[1].format("DD/MM/YYYY")}:
//                     </h5>
//                     <ul>
//                         {allDates.map((date, index) => <li key={index}>{date.format("DD/MM/YYYY")}</li>)}
//                     </ul>
//                     </div>    
//                 } }
//                     <button type="submit">Submit</button>
//                 </form>

//                 <ToastContainer/>
//             </div>
//         </>
//     ) 
// }

// export default UpdateService;