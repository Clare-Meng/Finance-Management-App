import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSpendingEntries, deleteSpendingEntry, deleteItem } from '../actions/spendingEntryActions';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';

import '../styling/SpendingEntry.css';

class SpendingEntry extends React.Component {

    componentDidMount() {
        this.props.getSpendingEntries();
    }

    onClickDelete = (id) => {
        this.props.deleteSpendingEntry(id);
    };

    onClickItemDelete = (id) => {
        this.props.deleteItem(id);
        this.props.getSpendingEntries();
    };

    render() {
        const { spendingEntries } = this.props.spendingEntry;
        
        return (
            <>
                <Container >
                    <ListGroup>
                        <TransitionGroup>
                            {spendingEntries.map(({ _id, title, description, items }) => (
                                <CSSTransition key={_id} timeout={500} classNames="fade">
                                    <ListGroupItem className="spending-entry">
                                        <Button
                                            size="sm"
                                            className="spending-entry-info"
                                            onClick={this.onClickDelete.bind(this, _id)}
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
                                                    onClick={this.onClickItemDelete.bind(this, _id)}
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
    spendingEntry: state.spendingEntry
});

export default connect(
    mapStateToProps,
    { getSpendingEntries, deleteSpendingEntry, deleteItem }
)(SpendingEntry);