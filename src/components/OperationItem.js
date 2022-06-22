import React, {useContext, useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {OPERATION_ROUTE} from "../utils/consts";
import InDevelopmentMessage from "./modals/InDevelopmentMessage";
import {Context} from "../index";

const OperationItem = ({operation}) => {
    const navigate = useNavigate()
    const [modalInDevMesVisible, setModalInDevMes] = useState(false)
    //console.log(navigate)
    let operType
    if (operation.operationTypeId === 1 && operation.destination === true) {
        operType = 'Расход'
    } else if (operation.operationTypeId === 1 && operation.destination === false) {
        operType = 'Доход'
    } else if (operation.operationTypeId === 2) {
        operType = 'Перевод'
    } else {
        operType = 'Долг'
    }
    return (
        <Col md={12}>
            <Card
                style={{cursor: 'pointer'}}
                border={"dark"}
                className=' mt-2'
            >
                <Container>
                    <Row onClick={() => navigate(OPERATION_ROUTE + "/" + operation.id)}>
                        <Col md={2}>
                            {operation.date}
                        </Col>
                        <Col>
                            <Row>Категория операции</Row>
                            <Row>{operation.place}</Row>
                            <Row>{operation.comment}</Row>
                        </Col>
                        <Col md={2}>
                            <Col>{operType}</Col>
                            <div>{operation.sum}</div>
                        </Col>
                        <Col md={3}>
                            <div>{operation.donorAccountId}</div>

                            <div>Счет-реципиент</div>
                        </Col>
                    </Row>
                    <Container className='d-flex justify-content-end'>
                        <Button
                            variant={"outline-secondary"}
                            className="m-2"
                            onClick={() => setModalInDevMes(true)}
                        >
                            Изменить
                        </Button>
                        <InDevelopmentMessage show={modalInDevMesVisible} onHide={() => setModalInDevMes(false)}/>
                        <Button
                            variant={"outline-secondary"}
                            className="m-2"
                            onClick={() => setModalInDevMes(true)}
                        >
                            Удалить
                        </Button>
                        <InDevelopmentMessage show={modalInDevMesVisible} onHide={() => setModalInDevMes(false)}/>
                    </Container>
                </Container>
            </Card>

        </Col>
    );
};

export default OperationItem;