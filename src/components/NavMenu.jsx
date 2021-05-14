import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function NavMenu() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Yoeun Sopanha</a>
                    </Navbar.Text>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default NavMenu
