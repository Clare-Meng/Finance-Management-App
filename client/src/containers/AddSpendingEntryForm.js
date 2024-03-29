import React, { Component } from 'react';
import {
    Row,
    Col, 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText
} from 'reactstrap';

import { connect } from 'react-redux';
import { addSpendingEntry } from '../actions/spendingEntryActions';

import '../styling/AddSpendingEntryForm.css';

class AddSpending extends React.Component {

    state = {
        listTitle: false,
        listDescription: false,
        itemNameFirstEntry: false,
        itemAmountFirstEntry: false,
        itemNameSecondEntry: false,
        itemAmountSecondEntry: false,
        itemNameThirdEntry: false,
        itemAmountThirdEntry: false
    }

    spendingEntrySubmit = (e) => {
        e.preventDefault();
        const items = [
            {
                name: this.state.itemNameFirstEntry,
                amount: this.state.itemAmountFirstEntry
            },
            {
                name: this.state.itemNameSecondEntry,
                amount: this.state.itemAmountSecondEntry
            },
            {
                name: this.state.itemNameThirdEntry,
                amount: this.state.itemAmountThirdEntry
            }
        ]
        const newSpendingEntry = {
            title: this.state.listTitle,
            description: this.state.listDescription,
            items: items
        }
        this.props.addSpendingEntry(newSpendingEntry);
    }

    handleListTitleChange = (e) => {
        e.preventDefault();
        this.setState({
            listTitle: e.target.value
        });
    }

    handleListDescriptionChange = (e) => {
        e.preventDefault();
        this.setState({
            listDescription: e.target.value
        });
    }

    handleListItemNameChangeFirst = (e) => {
        e.preventDefault();
        this.setState({
            itemNameFirstEntry: e.target.value
        });
    }

    handleListItemAmountChangeFirst = (e) => {
        e.preventDefault();
        this.setState({
            itemAmountFirstEntry: e.target.value
        });
    }

    handleListItemNameChangeSecond = (e) => {
        e.preventDefault();
        this.setState({
            itemNameSecondEntry: e.target.value
        });
    }

    handleListItemAmountChangeSecond = (e) => {
        e.preventDefault();
        this.setState({
            itemAmountSecondEntry: e.target.value
        });
    }

    handleListItemNameChangeThird = (e) => {
        e.preventDefault();
        this.setState({
            itemNameThirdEntry: e.target.value
        });
    }

    handleListItemAmountChangeThird = (e) => {
        e.preventDefault();
        this.setState({
            itemAmountThirdEntry: e.target.value
        });
    }

    render() {
        return (
            <>
                <Form onSubmit={this.spendingEntrySubmit}>
                    <FormGroup>
                        <Label>List Title</Label>
                        <Input 
                            placeholder="Groceries"
                            onChange={this.handleListTitleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>List Description</Label>
                        <Input 
                            placeholder="Weekly Grocery Run"
                            onChange={this.handleListDescriptionChange}
                        />
                    </FormGroup>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Item #1</Label>
                                <Input 
                                    placeholder="Apples"
                                    onChange={this.handleListItemNameChangeFirst}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Price</Label>
                                <Input 
                                    placeholder="$"
                                    onChange={this.handleListItemAmountChangeFirst}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Item #2</Label>
                                <Input 
                                    placeholder="Oranges"
                                    onChange={this.handleListItemNameChangeSecond}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Price</Label>
                                <Input 
                                    placeholder="$"
                                    onChange={this.handleListItemAmountChangeSecond}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Item #3</Label>
                                <Input 
                                    placeholder="Milk"
                                    onChange={this.handleListItemNameChangeThird}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Price</Label>
                                <Input 
                                    placeholder="$"
                                    onChange={this.handleListItemAmountChangeThird}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <div className="form-buttons">
                        <Button
                            color="primary"
                        >Add more Items</Button>
                        <Button className="add-category-btn" color="primary">Add a Category</Button>
                        <Button className="submit-new-spending-btn">Submit New Spending</Button>
                    </div>
                </Form>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    
});

export default connect(
    mapStateToProps,
    { addSpendingEntry }
)(AddSpending);