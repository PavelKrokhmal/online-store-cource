import { useContext, useState } from 'react'
import {Modal, Button, Form, FormControl, Dropdown, Row, Col} from 'react-bootstrap'
import {Context} from '../../index'

function CreateDevice({show, onHide}) {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])
    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i=> i.number !== number))
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
                            Select type
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2">
                        <Dropdown.Toggle>
                            Select brand
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <FormControl placeholder="Device name" className="mt-2"/>
                    <FormControl placeholder="Device price" className="mt-2" type="number"/>
                    <FormControl placeholder="Device name" className="mt-2" type="file"/>
                    <hr/>
                    <Button variant="outline-dark" onClick={addInfo} className="mb-2">Add new feature</Button>
                    {
                        info.map(i => 
                            <Row className="mb-2" key={i.number}>
                                <Col md={4}>
                                    <Form.Control placeholder="Feature name"/>
                                </Col>
                                <Col md={4}>
                                    <Form.Control placeholder="Description"/>
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
                <Button variant={"outline-success"} onClick={onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateDevice