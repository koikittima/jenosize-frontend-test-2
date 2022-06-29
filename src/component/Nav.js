import React from 'react'
import Link from 'next/link'
import { Navbar, Container, Row, Col } from 'react-bootstrap';

function NavBar() {
    return (
        <React.Fragment>
            <Navbar expand="lg" sticky="top" className=" pb-0 flex-column px-md-0 pb-md-0 bg-blue ">
                <Container className="" >
                    <Row className="w-100">
                        <Col lg={12} md={12} sm={12} className="d-flex align-items-center justify-content-between">
                            <Link href='/'>
                                <Navbar.Brand>
                                    <div className="d-flex align-items-center cursor-p ">
                                        <i class="fas fa-utensils font50 text-white  mr-4"></i>
                                        <span className='text-white font20 blod'>Eat Together</span>
                                    </div>
                                </Navbar.Brand>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default NavBar;

