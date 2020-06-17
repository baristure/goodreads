import React, { Component } from 'react'
import { Navbar, Col } from 'react-bootstrap'


export default class Footer extends Component {
    render() {
        return (
            <Navbar bg="primary" fixed="bottom">
                <Col md={{ span: 6, offset: 3 }}><h3 className="text-white" href="/">GoodReads</h3>
                </Col>
            </Navbar>

        )
    }
}