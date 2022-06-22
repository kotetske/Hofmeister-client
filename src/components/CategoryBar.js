import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Container, ListGroup} from "react-bootstrap";

const CategoryBar = observer(() => {
        const {operation} = useContext(Context)
        return (
            <Card className='mt-2'>
                <Card.Header>Категории</Card.Header>
                <ListGroup >
                    {operation.categories.map(categories =>
                        <ListGroup.Item
                            //variant={"info"}
                            //style={{cursor: 'pointer'}}
                            //active={categories.id === operation.selectedDonorAccount.id}
                            //onClick={() => operation.setSelectedDonorAccount(donorAccount)}
                            key={categories.id}
                        >
                            {categories.name}
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Card>
        );
    }
);

export default CategoryBar;