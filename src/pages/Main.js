import React, {useContext, useEffect, useState} from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import Account from "./Account";
import AccountBar from "../components/AccountBar";
import OperationTypeBar from "../components/OperationTypeBar";
import OperationList from "../components/OperationList";
import CreateOperation from "../components/modals/CreateOperation";
import CategoryBar from "../components/CategoryBar";
import CreateAccount from "../components/modals/CreateAccount";
import CreateCategory from "../components/modals/CreateCategory";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchAccounts, fetchCategories, fetchOperations, fetchTypes} from "../http/API";
import operation from "./Operation";

const Main = observer(() => {
    const {operation} = useContext(Context)
    useEffect(() => {
        fetchTypes().then(data => operation.setOperationType(data))
        fetchAccounts().then(data => operation.setDonorAccount(data))
        fetchCategories().then(data => operation.setCategories(data))
        fetchOperations(operation.selectedDonorAccount.id, operation.selectedOperationType.id).then(data => operation.setOperations(data.rows))
        console.log('AccID' + operation.selectedDonorAccount.id)
    }, [operation.selectedDonorAccount, operation.selectedOperationType])
    console.log(operation)
    const [modalAddOperationVisible, setModalAddOperation] = useState(false)
    const [modalAddAccountVisible, setModalAddAccount] = useState(false)
    const [modalAddCategoryVisible, setModalAddCategory] = useState(false)
    return (
        <Container>
            <Row className='mt-2'>
                <Col md={9}>
                    <Container className='d-flex justify-content-between mt-2 mb-2'>
                        <OperationTypeBar/>
                        <Button
                            variant={"outline-primary"}
                            className="mt-2"
                            onClick={() => setModalAddOperation(true)}
                        >
                            Добавить операцию
                        </Button>
                        <CreateOperation show={modalAddOperationVisible} onHide={() => setModalAddOperation(false)}/>
                    </Container>
                    <OperationList/>
                </Col>
                <Col md={3} className=''>
                    <AccountBar/>
                    <Button
                        variant={"outline-dark"}
                        className="mt-2"
                        onClick={() => setModalAddAccount(true)}
                    >
                        Добавить счет
                    </Button>
                    <CreateAccount show={modalAddAccountVisible} onHide={() => setModalAddAccount(false)}/>

                    <CategoryBar/>
                    <Button
                        variant={"outline-dark"}
                        className="mt-2"
                        onClick={() => setModalAddCategory(true)}
                    >
                        Добавить счет
                    </Button>
                    <CreateCategory show={modalAddCategoryVisible} onHide={() => setModalAddCategory(false)}/>

                </Col>
            </Row>
        </Container>
    );
});

export default Main;