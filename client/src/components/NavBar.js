import React, { useContext } from 'react'
import { Context } from '..'
import {Navbar, Nav, Button, Container} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import {observer} from 'mobx-react-lite'
import {useHistory} from 'react-router-dom'

function NavBar() {
    const {user} = useContext(Context)
    const history = useHistory() 

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: "white"}} to={SHOP_ROUTE}>Buy-Device</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: "white"}}>
                        <Button variant="outline-light" 
                            onClick={()=> {
                                history.push(ADMIN_ROUTE)
                            }}
                        >Admin</Button>
                        <Button variant="outline-light" className="ml-2"
                            onClick={()=> {history.push(LOGIN_ROUTE)}}
                        >Log out</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: "white"}}>              
                        <Button variant="outline-light" onClick={() => user.setIsAuth(true)}>Authorization</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
}

export default observer(NavBar)
