import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import OperationItem from "./OperationItem";

const OperationList = observer(() => {
    const {operation} = useContext(Context)
    const accs = operation.accounts
        return (
            <Row className="d-flex">
                {operation.operations.map((operation) =>
                    <OperationItem key={operation.id} operation={operation}/>
                )}
            </Row>
        );
    }
);

export default OperationList;