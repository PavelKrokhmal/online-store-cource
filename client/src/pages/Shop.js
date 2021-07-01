import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'

function Shop() {
    return (
        <Container>
            <Row className="mt-4">
                <Col md="3">
                    <TypeBar/>
                </Col>
                <Col md="9">
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    )
}

export default Shop
