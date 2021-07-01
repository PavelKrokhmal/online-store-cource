import React from 'react'
import {Container, Col, Row, Image, Card, Button} from 'react-bootstrap'
import bigStar from '../assets/bigStar.png'

function DevicePage() {
    const device = {id: 1, name: "Iphone 12 Pro", price: 25000, rating: 5, img: "https://estore.ua/media/catalog/product/cache/8/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-black_1_.jpeg?utm_source=sellaction.net&SAuid=6bfb9105a41f62de99&utm_medium=cpa"}

    const description = [
        {id:1, title: 'Processor', description: 'Intel core i3'},
        {id:2, title: 'RAM', description: '8gb'},
        {id:3, title: 'Camera', description: '42mp'},
        {id:3, title: 'Camera', description: '42mp'}
    ]

    return (
        <Container className="mt-4">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, 
                                    width: 240, 
                                    height: 240, 
                                    backgroundSize: 'contain',
                                    fontSize:64
                            }}
                        >
                            {device.rating}

                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300}}>
                        <h3>{device.price}</h3>
                        <Button variant={"outline-dark"}>Add to cart</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column mt-4">
                <h1>Specification</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'transparent' : 'lightgray', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>

        </Container>
    )
}

export default DevicePage
