import { useContext, useEffect, useState } from 'react'
import {Modal, Button, Form, FormControl, Dropdown, Row, Col} from 'react-bootstrap'
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceAPI'
import {Context} from '../../index'
import {observer} from 'mobx-react-lite'

function CreateDevice({show, onHide}) {
    const {device} = useContext(Context)

    useEffect(()=> {
        fetchTypes()
            .then(
                data => device.setTypes(data)
            )
        fetchBrands()
            .then(
                data => device.setBrands(data)
            )
    }, [])

    const [name, setName] = useState('') 
    const [price, setPrice] = useState(0) 
    const [file, setFile] = useState(null) 
    const [type, setType] = useState(null) 
    const [brand, setBrand] = useState(null) 

    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i=> i.number !== number))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', price)
        formData.append('brandId', brand.id)
        formData.append('typeId', type.id)
        formData.append('info', JSON.stringify(info))
        formData.append('img', file)

        createDevice(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>
                            {type?.name || "Select type"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(t =>
                                <Dropdown.Item key={t.id}
                                    onClick={() => setType(t)}>
                                    {t.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2">
                        <Dropdown.Toggle>
                            {brand?.name || "Select brand"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(b =>
                                <Dropdown.Item key={b.id} onClick={() => setBrand(b)}>{b.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <FormControl placeholder="Device name" className="mt-2" value={name} onChange={e=>setName(e.target.value)}/>
                    <FormControl placeholder="Device price" className="mt-2" type="number" value={price}  onChange={e=>setPrice(+e.target.value)}/>
                    <FormControl placeholder="Device name" className="mt-2" type="file" onChange={selectFile}/>
                    <hr/>
                    <Button variant="outline-dark" onClick={addInfo} className="mb-2">Add new feature</Button>
                    {
                        info.map(i => 
                            <Row className="mb-2" key={i.number}>
                                <Col md={4}>
                                    <Form.Control 
                                        placeholder="Feature name" 
                                        onChange={e => changeInfo('title', e.target.value, i.number)}
                                        value={i.title}/>
                                </Col>
                                <Col md={4}>
                                    <Form.Control 
                                        placeholder="Description" 
                                        onChange={e => changeInfo('description', e.target.value, i.number)}
                                        value={i.description}/>
                                </Col>
                                <Col md={4}>
                                    <Button variant="outline-danger" onClick={() => {removeInfo(i.number)}}>
                                        Delete   
                                    </Button>
                                </Col>
                            </Row>
                        )
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                <Button variant={"outline-success"} onClick={addDevice}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default observer(CreateDevice)