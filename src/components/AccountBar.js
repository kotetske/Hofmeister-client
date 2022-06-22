import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const AccountBar = observer(() => {
    const {operation} = useContext(Context)
        return (
            <ListGroup>
                {operation.donorAccounts.map(donorAccount =>
                    <ListGroup.Item
                        style={{cursor: 'pointer'}}
                        active={donorAccount.id === operation.selectedDonorAccount.id}
                        onClick={() => operation.setSelectedDonorAccount(donorAccount)}
                        key={donorAccount.id}
                    >
                        {donorAccount.name}
                    </ListGroup.Item>
                )}
            </ListGroup>
        );
    }
);

export default AccountBar;