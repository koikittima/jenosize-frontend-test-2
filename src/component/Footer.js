import React from "react";
import { Container, Row, Col, } from 'react-bootstrap';

function Footer() {

    return (
        <footer className="border footer-fixed py-4 bg-blue">
            <Container>
                <Row className='d-flex justify-content-between'>
                    <Col lg={12} md={12} m={12} xs={12} className="d-flex justify-content-center">
                        <span  className="text-white blod font20"> <i class="fas fa-utensils text-white  mr-2"></i>Eat Together</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
