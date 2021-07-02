import { useState } from 'react'
import {Modal, Button, Form, FormControl} from 'react-bootstrap'
import {createType} from '../../http/deviceAPI'

function CreateType({show, onHide}) {
    const [name, setName] = useState('')
    const addType = () => {
        createType(name)
            .then(data => {
                setName('')
                onHide()
            })
            .catch(e => {
                alert(e.data.message)
            })
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
                    Add new type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormControl placeholder="Type name..." value={name} onChange={(e) => {setName(e.target.value)}}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                <Button variant={"outline-success"} onClick={addType}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateType