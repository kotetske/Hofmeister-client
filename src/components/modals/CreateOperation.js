import React, {useContext, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {createOperation} from "../../http/API";

const CreateOperation = observer(({show, onHide}) => {
    const {operation} = useContext(Context)
    const [sum, setSum] = useState(0)
    const [date, setDate] = useState('2022-06-20T10:00:00.000Z')
    const [place, setPlace] = useState(null)
    const [comment, setComment] = useState(null)
    /*const [type, setType] = useState(null)
    const [account, setAccount] = useState('')*/

    const addOperation = () => {
        let oper = {
            "userId": 1,
            "donorAccountId": operation.selectedDonorAccount.id,
            "operationTypeId": operation.selectedOperationType.id,
            "destination": true,
            "sum": sum,
            "date": date,
            "place": place,
            "comment": comment,
        }
        createOperation(oper).then(date => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="sm"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить операцию
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{operation.selectedOperationType.name || "Тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {operation.operationTypes.map(type =>
                                <Dropdown.Item
                                    onClick={() => operation.setSelectedOperationType(type)}
                                    key={type.id}
                                >
                                    {type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{operation.selectedDonorAccount.name || "Счёт"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {operation.donorAccounts.map(account =>
                                <Dropdown.Item
                                    onClick={() => operation.setSelectedDonorAccount(account)}
                                    key={account.id}
                                >
                                    {account.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Категория</Dropdown.Toggle>
                        <Dropdown.Menu>

                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={sum}
                        onChange={e => setSum(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите сумму"
                        type="number"
                    />
                    <Form.Control
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        className="mt-3"
                        placeholder="Введите дату"
                        type="date"
                    />
                    <Form.Control
                        value={place}
                        onChange={e => setPlace(e.target.value)}
                        className="mt-3"
                        placeholder="Место"
                        type="text"
                    />
                    <Form.Control
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        className="mt-3"
                        placeholder="Комментарий"
                        type="text"
                    />

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Отмена</Button>
                <Button variant='outline-success' onClick={addOperation}>Сохранить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateOperation;