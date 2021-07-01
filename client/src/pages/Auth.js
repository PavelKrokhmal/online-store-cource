import React from 'react'
import {Container, Form, Card, Button, Row} from 'react-bootstrap'
import {NavLink, useLocation} from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

function Auth() {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control placeholder="Input your email..."
                        type="email" 
                        className="mt-4"/>
                    <Form.Control placeholder="Input your password..." 
                        type="password"
                        className="mt-2"/>
                    <Row className="d-flex justify-content-between mt-4 pl-3 pr-3">
                        {isLogin ? 
                            <div>
                                No account? <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
                            </div>
                            :
                            <div>
                                Have account? <NavLink to={LOGIN_ROUTE}>Log in</NavLink>
                            </div>
                        }
                        <Button variant={"outline-success"}>
                           {isLogin ? "Log in" : "Registration"}
                        </Button>
                    </Row>
                </Form>

            </Card>
        </Container>
    )
}

export default Auth
