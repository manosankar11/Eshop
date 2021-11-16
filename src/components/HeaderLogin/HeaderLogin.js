import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginPage from '../Login/Login'
import Logo from "../Logo/logo"


const HeaderLogin = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
                <Container>
                    <Navbar.Brand style={{ textDecoration: "None" }}>
                        <Link to="/">
                            <Logo />
                        </Link>
                    </Navbar.Brand>
                    <LoginPage />
                </Container>
            </Navbar>
        </>
    )
}

export default HeaderLogin
