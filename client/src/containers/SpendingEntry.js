import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';

import '../styling/SpendingEntry.css';

import { getSpendingEntries } from '../actions/spendingEntryActions';

import { openDeleteSpendingEntryModal } from '../actions/deleteSpendingEntryModalActions';
import { openDeleteItemModal } from '../actions/deleteItemModalActions';

import DeleteSpendingEntryModal from './modals/DeleteSpendingEntryModal';
import DeleteItemModal from './modals/DeleteItemModal';

class SpendingEntry extends React.Component {

    componentDidMount() {
        this.props.getSpendingEntries();
    }

    onDeleteSpendingEntryButtonClick = (id) => {
        this.props.openDeleteSpendingEntryModal();
        this.spendingEntryID = id;
    };

    onDeleteItemButtonClick = (id) => {
        this.props.openDeleteItemModal();
        this.itemID = id;
    };

    render() {
        const { spendingEntries } = this.props.spendingEntry;
        const { isDeleteSpendingEntryModalOpen } = this.props.isDeleteSpendingEntryModalOpen;
        const { isDeleteItemModalOpen } = this.props.isDeleteItemModalOpen;
        
        return (
            <>
                <Container >
                    <DeleteSpendingEntryModal 
                        isDeleteSpendingEntryModalOpen={isDeleteSpendingEntryModalOpen}
                        spendingEntryID={this.spendingEntryID}
                    />
                    <DeleteItemModal
                        isDeleteItemModalOpen={isDeleteItemModalOpen}
                        itemID={this.itemID}
                    />
                    <ListGroup>
                        <TransitionGroup>
                            {spendingEntries.map(({ _id, title, description, items }) => (
                                <CSSTransition key={_id} timeout={500} classNames="fade">
                                    <ListGroupItem className="spending-entry">
                                        <Button
                                            size="sm"
                                            className="spending-entry-info"
                                            onClick={this.onDeleteSpendingEntryButtonClick.bind(this, _id)}
                                        >&times;</Button>{title}
                                        <div className="spending-entry-description">
                                            {description}
                                        </div>
                                        {items.map(({ _id, name, amount }) => (
                                            <div key={_id}>
                                                <Button
                                                    color="secondary"
                                                    size="sm"
                                                    className="spending-entry-item"
                                                    onClick={this.onDeleteItemButtonClick.bind(this, _id)}
                                                >&times;</Button>
                                                <span>{name}:</span>
                                                <span className="item-amount">${amount}</span>
                                            </div>
                                        ))}      
                                    </ListGroupItem>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ListGroup>
                </Container>
            </>
        );
    }
}

SpendingEntry.propTypes = {
    getSpendingEntries: PropTypes.func.isRequired,
    spendingEntry: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    spendingEntry: state.spendingEntry,
    isDeleteSpendingEntryModalOpen: state.deleteSpendingEntryModal,
    isDeleteItemModalOpen: state.deleteItemModal
});

export default connect(
    mapStateToProps,
    { getSpendingEntries, openDeleteSpendingEntryModal, openDeleteItemModal }
)(SpendingEntry);