import { useState } from 'react'
import {Modal, Button, Form, FormControl} from 'react-bootstrap'
import {createBrand} from '../../http/deviceAPI'

function CreateBrand({show, onHide}) {
    const [name, setName] = useState('')
    const addBrand = () => {
        createBrand(name)
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
                    Add new brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormControl placeholder="Brand name..." value={name} onChange={(e)=> setName(e.target.value)}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                <Button variant={"outline-success"} onClick={addBrand}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateBrand