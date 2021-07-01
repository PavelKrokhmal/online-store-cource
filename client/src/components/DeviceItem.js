import React from 'react'
import {Col, Card, Image} from 'react-bootstrap'
import star from '../assets/star.png'
import {useHistory} from 'react-router-dom'
import {DEVICE_ROUTE} from '../utils/consts'

function DeviceItem({device}) {
    const history = useHistory()
    return (
        <Col md={3} className="p-0"onClick={(() => {history.push(DEVICE_ROUTE + '/' + device.id)})}>
            <Card style={{widht: 150, cursor: 'pointer'}} className="p-2 mr-2 mb-2">
                <Image width="150" height="150" src={device.img} className="align-self-center"/>
                <div className="d-flex justify-content-between align-items-center mt-2 text-black-50">
                    <div>Samsung</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image src={star} width="16" height="16"/>
                    </div>
                </div>
                <div>
                    {device.name}
                </div>
            </Card>
        </Col>
    )
}

export default DeviceItem
