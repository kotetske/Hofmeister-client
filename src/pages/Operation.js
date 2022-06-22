import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Operation = () => {
    const operation  = {id: 1, destination: '', sum: 100, date: '10.10.2010', place: 'magnit', comment: '' }
    return (
        <Container>
            <h3>Мек-Мек!</h3>
            <p>Здесь будет страница конкретной операции. Спасибо что заглянули!</p>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </Container>
    );
};

export default Operation;