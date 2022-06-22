import React from 'react';
import {Button, Modal} from "react-bootstrap";

const InDevelopmentMessage = ({show, onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="sm"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Упс, а здесь еще ничего нет...
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

export default InDevelopmentMessage;