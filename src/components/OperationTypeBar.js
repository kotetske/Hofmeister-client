import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Container, Row} from "react-bootstrap";

const OperationTypeBar = observer(() => {
        const {operation} = useContext(Context)
        return (
            <div className='d-flex'>
                {operation.operationTypes.map(operationType =>
                    <Card
                        style={{cursor: 'pointer'}}
                        key={operationType.id}
                        className="p-3"
                        onClick={() => operation.setSelectedOperationType(operationType)}
                        border={operationType.id === operation.selectedOperationType.id ? 'danger' : "light"}
                    >
                        {operationType.name}
                    </Card>
                )}
            </div>
        );
    }
);

export default OperationTypeBar;