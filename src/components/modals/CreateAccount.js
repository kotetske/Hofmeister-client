import React, {useContext} from 'react';
import {Button, Dropdown, Fade, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";

const CreateAccount = ({show, onHide}) => {
    //const {operation} = useContext(Context)
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="sm"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить счет
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Функция находится в разработке
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Отмена</Button>
                <Button variant='outline-success' onClick={onHide}>Сохранить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateAccount;