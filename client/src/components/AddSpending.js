import React, { Component } from 'react';
import { 
    Col, 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText
} from 'reactstrap';

import '../styling/AddSpending.css';

class AddSpending extends React.Component {
    render() {
        return (
            <>
                <Form className="add-spending-form-container">
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>List Title</Label>
                        <Col sm={10}>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Groceries" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>List Description</Label>
                        <Col sm={10}>
                            <Input type="password" name="password" id="examplePassword" placeholder="Weekly Grocery Run" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Item Name and Amount</Label>
                        <Col sm={10}>
                            <Input type="password" name="password" id="examplePassword" placeholder="Apples" />
                            <Input className="add-spending-amount" type="password" name="password" id="examplePassword" placeholder="$" />
                        </Col>
                    </FormGroup>
                    
                    <Button className="add-more-items-btn" color="primary">Add more Items</Button>
                    <Button className="add-category-btn" color="primary">Add a Category</Button>
                    <Button className="submit-new-spending-btn">Submit New Spending</Button>
                </Form>
            </>
        );
    }
}

export default AddSpending;