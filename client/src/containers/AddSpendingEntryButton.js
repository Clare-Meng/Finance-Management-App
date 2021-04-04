import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Button
} from 'reactstrap';

import { openAddSpendingEntryModal } from '../actions/addSpendingEntryModalActions';

import AddSpendingEntryModal from './modals/AddSpendingEntryModal';

import '../styling/AddSpendingEntryButton.css';

class AddSpendingEntryButton extends React.Component {

    onAddSpendingEntryButtonClick = () => {
        console.log("HELLO WORLD");
        this.props.openAddSpendingEntryModal();
    }

    render() {
        const { isAddSpendingEntryModalOpen } = this.props.isAddSpendingEntryModalOpen;

        return (
            <>
                <AddSpendingEntryModal
                    isAddSpendingEntryModalOpen={isAddSpendingEntryModalOpen}
                />
                <Button 
                  className="home-add-items-button"
                  onClick={this.onAddSpendingEntryButtonClick}
                >Add Purchases</Button>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    isAddSpendingEntryModalOpen: state.addSpendingEntryModal
});

export default connect(
    mapStateToProps,
    { openAddSpendingEntryModal }
)(AddSpendingEntryButton);