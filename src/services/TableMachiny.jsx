import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faAdd, faUser, faPhone, faEnvelope, faIdCard, faUserShield, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';

function TableMachinery({ machineries, componentNew }) {
    const apiMachinery = "https://proalarmepp.onrender.com/api/";
    const [selectedMachinery, setSelectedMachinery] = useState(0);
    const [machinery, setMachinery] = useState({});
    const [person, setPerson] = useState({});
    const [user, setUser] = useState({});
    const [personSelected, setPersonSelected] = useState(false);
    const [userSelected, setUserSelected] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [machineryResponse, personResponse] = await Promise.all([
                    axios.get(`${apiMachinery}machinery/${selectedMachinery}/`),
                    axios.get(`${apiMachinery}person/?machinery=${selectedMachinery}`)
                ]);

                setMachinery(machineryResponse.data);
                if (personResponse.data[0]) {
                    setPerson(personResponse.data[0]);
                    setPersonSelected(true);
                } else {
                    setPersonSelected(false);
                    setUserSelected(false);
                }
            } catch (e) {
                console.error(e);
            }
        };

        if (selectedMachinery !== 0) {
            fetchData();
        }
    }, [selectedMachinery]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiMachinery}user/?person=${person.id}`);
                if (response.data[0]) {
                    setUser(response.data[0]);
                    setUserSelected(true);
                } else {
                    setUserSelected(false);
                }
            } catch (e) {
                console.error(e);
            }
        };

        if (selectedMachinery !== 0 && person.id) {
            fetchData();
        }
    }, [person]);

    const handleMachineryClick = (id) => {
        setSelectedMachinery(id);
    };

    return (
        <div className="details">
            <div className="recentOrders">
                <div className="cardHeader">
                    <h2>Maquinarias</h2>
                    <div>
                        <button className="btn" onClick={() => componentNew(true)}>
                            <FontAwesomeIcon icon={faAdd} id="btn_open" /> Agregar
                        </button>
                    </div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tipo-Maquinaria</th>
                            <th>Mantinimiento</th>
                            <th>Estado</th>
                        </tr>
                    </thead>

                    <tbody>
                        {machineries.map((machinery, index) => (
                            <tr key={machinery.id} onClick={() => handleMachineryClick(machinery.id)}>
                                <th>{index + 1}</th>
                                <td>{machinery.type_machinery}</td>
                                <td>{machinery.date_maintenance}</td>
                                <td>{machinery.status}</td>
                                <td>
                                    <FontAwesomeIcon icon={faEdit} id="btn_open" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="recentCustomers">
                {selectedMachinery === 0? 
                <div className='container_div'>
                    <div className='centered-div alert_p'>
                        <p className=''>Seleccione una maquinaria para obtener informacion</p>
                    </div>
                </div>:(
                    <div className="cardHeader">
                        <img src={machinery.img} alt="" className="card__img" />
                    </div>
                )}

                <div className='container_center'>
                    {personSelected && (
                        <div className="card_user">
                            <div className="card__title">
                                <h2>{machinery.type_machinery}</h2>
                            </div>
                            <div className='container_center'>
                                <div className="card__content">
                                    <h3>
                                        PERSONA ENCARGADO
                                    </h3>
                                </div>
                            </div>
                            <div className="card__content">
                                <h4>
                                    <FontAwesomeIcon icon={faUser} /> {person.name}
                                </h4>
                            </div>
                            <div className="card__content">
                                <h4>
                                    <FontAwesomeIcon icon={faIdCard} /> {person.dni}
                                </h4>
                            </div>
                            <div className="card__content">
                                <h4>
                                    <FontAwesomeIcon icon={faPhone} /> {person.number}
                                </h4>
                            </div>
                            <div className="card__content">
                                <h4>
                                    <FontAwesomeIcon icon={faEnvelope} /> {person.email}
                                </h4>
                            </div>
                        </div>
                    )}
                </div>

                <div className='container_center'>
                    {userSelected && (
                        <div className="card_user">
                            <div className="container_center">
                                <div className="card_avatar">
                                    <img src={user.avatar !== "" ? user.avatar : "https://th.bing.com/th/id/OIP.GHGGLYe7gDfZUzF_tElxiQHaHa?pid=ImgDet&rs=1"} alt="" className="card__img_avatar" />
                                </div>
                            </div>
                            <div className='container_center'>
                                <div className="card__content">
                                    <h2>
                                        {user.rol === 1 ? "ADMINISTRADOR" : "USUARIO"}
                                    </h2>
                                </div>
                            </div>
                            <div className="card__content">
                                <h4>
                                    <FontAwesomeIcon icon={faUser} /> {user.username}
                                </h4>
                            </div>
                            <div className="card__content">
                                <h4>
                                    <FontAwesomeIcon icon={faUserShield} /> {user.rol === 1 ? "Administrador" : "Operador"}
                                </h4>
                            </div>
                            <div className="card__content">
                                <h4>
                                    <FontAwesomeIcon icon={faCalendarAlt} /> {user.date_created}
                                </h4>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TableMachinery;
