import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
export default class Header extends Component {
    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">GoodReads</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/books">Books</Nav.Link>
                    <Nav.Link href="/genres">Genres</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}