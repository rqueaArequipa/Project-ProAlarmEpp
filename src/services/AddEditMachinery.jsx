import { useEffect, useState } from "react"
import {
    Col, Form, Button, Row, Badge,
    Card,
    Navbar,
    Nav,
    Container,
    Image,
    InputGroup
} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'


function FormMachinery({ machinery, onSubmit, onCancel }) {

    const [typeMachinery, setTypeMachinery] = useState('')
    const [model, setModel] = useState('')
    const [numSerial, setNumSerial] = useState(0)
    const [year, setYear] = useState(0)
    const [capacity, setCapacity] = useState(0)
    const [typeFuel, setTypeFuel] = useState('')
    const [hour, setHour] = useState(0)
    const [dateMaintenance, setDateMaintenance] = useState('')
    const [status, setStatus] = useState('')
    const [typeEngine, setTypeEngine] = useState('')
    const [img, setImg] = useState('')

    useEffect(() => {
        if (machinery) {
            setTypeMachinery(machinery.type_machinery)
            setModel(machinery.model)
            setNumSerial(machinery.num_serial)
            setYear(machinery.year)
            setCapacity(machinery.capacity)
            setTypeFuel(machinery.type_fuel)
            setHour(machinery.hour)
            setDateMaintenance(machinery.date_maintenance)
            setStatus(machinery.status)
            setTypeEngine(machinery.type_engine)
            setImg(machinery.img)
        }
    }, [machinery])

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            type_machinery: typeMachinery,
            model: model,
            num_serial: numSerial,
            year: year,
            capacity: capacity,
            type_fuel: typeFuel,
            hour: hour,
            date_maintenance: dateMaintenance,
            status: status,
            type_engine: typeEngine,
            img: img
        }
        onSubmit(machinery ? machinery.id : null, data)
    }

    const handleFormCancel = () => {
        onCancel()
    }


    return (
        <div className="details">
            <div className="recentOrders">
                <div className="text-center">
                    <h3>{machinery ? "Actualizar Maquinaria" : "Agregar Maquinaria"}</h3>
                </div>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formTypeMachinery" className="mb-3">
                                    <Form.Label>Tipo - Maquinaria:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="type_machinery"
                                        value={typeMachinery}
                                        onChange={(e) => setTypeMachinery(e.target.value)}
                                        placeholder=""
                                    />
                                </Form.Group>
                                <Form.Group controlId="formModel" className="mb-3">
                                    <Form.Label>Modelo</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="model"
                                        value={model}
                                        onChange={(e) => setModel(e.target.value)}
                                        placeholder=""
                                    />
                                </Form.Group>
                                <Form.Group controlId="formNumSerial" className="mb-3">
                                    <Form.Label>Numero - Serie</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="num_serial"
                                        value={numSerial}
                                        onChange={(e) => setNumSerial(e.target.value)}
                                        placeholder=""
                                    />
                                </Form.Group>
                                <Form.Group controlId="formYear" className="mb-3">
                                    <Form.Label>Anho</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="year"
                                        value={year}
                                        onChange={(e) => setYear(e.target.value)}
                                        placeholder=""
                                    />
                                </Form.Group>
                                <Form.Group controlId="formCapacity" className="mb-3">
                                    <Form.Label>Capacidad</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="capacity"
                                        value={capacity}
                                        onChange={(e) => setCapacity(e.target.value)}
                                        placeholder=""
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formTypeFuel" className="mb-3">
                                    <Form.Label>Tipo - Combustible</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="type_fuel"
                                        value={typeFuel}
                                        onChange={(e) => setTypeFuel(e.target.value)}
                                        placeholder=""
                                    />
                                </Form.Group>
                                <Form.Group controlId="formHour" className="mb-3">
                                    <Form.Label>Hora</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="hour"
                                        value={hour}
                                        onChange={(e) => setHour(e.target.value)}
                                        placeholder=""
                                    />
                                </Form.Group>
                                <Form.Group controlId="formDateMaintenance" className="mb-3">
                                    <Form.Label>Fecha - Mantenimiento</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="date_maintenance"
                                        value={dateMaintenance}
                                        onChange={(e) => setDateMaintenance(e.target.value)}
                                        placeholder=""
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Seleccionar el estado:</Form.Label>
                                    <InputGroup>
                                        <Form.Control as="select" value={status} onChange={(e) => setStatus(e.target.value)}>
                                            <option value="">Seleccionar el estado</option>
                                            <option value="Operativo">Operativo</option>
                                            <option value="No operativo">No operativo</option>
                                        </Form.Control>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Seleccionar el tipo de motor:</Form.Label>
                                    <InputGroup>
                                        <Form.Control as="select" value={typeEngine} onChange={(e) => setTypeEngine(e.target.value)}>
                                            <option value="">Seleccionar el tipo</option>
                                            <option value="Motores diésel">Motores diésel</option>
                                            <option value="Motores de gasolina">Motores de gasolina</option>
                                            <option value="Motores eléctricos">Motores eléctricos</option>
                                            <option value="Motores de gas natural">Motores de gas natural</option>
                                            <option value="Motores híbridos">Motores híbridos</option>
                                        </Form.Control>
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Form.Group controlId="formImg" className="mb-3">
                                <Form.Label>URL - Imagen</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="img"
                                    value={img}
                                    onChange={(e) => setImg(e.target.value)}
                                    placeholder=""
                                />
                            </Form.Group>
                        </Row>
                        <Form.Group>
                            <div className="text-center">
                                <Button variant="primary" type="submit" style={{ marginRight: '10px' }}>
                                    {machinery ? "Actualizar" : "Agregar"}
                                </Button>
                                <Button variant="secondary" onClick={handleFormCancel}>
                                    Cancelar
                                </Button>
                            </div>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </div>
            <div className="recentCustomers">
                {machinery || img?
                    (
                        <div className="cardHeader">
                            <img src={img} alt="" className="card__img" />
                        </div>
                    )
                    :
                    ""
                    }
            </div>
        </div>
    )
}

export default FormMachinery