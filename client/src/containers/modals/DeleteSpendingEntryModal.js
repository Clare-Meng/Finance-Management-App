import React, { Component } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { closeDeleteSpendingEntryModal } from '../../actions/deleteSpendingEntryModalActions';
import { deleteSpendingEntry } from '../../actions/spendingEntryActions';

import '../../styling/DeleteSpendingEntryModal.css';

class DeleteSpendingEntryModal extends React.Component {

    onClickModalClose = () => {
        this.props.closeDeleteSpendingEntryModal();
    }

    onDeleteSpendingEntryClick = () => {
        this.props.deleteSpendingEntry(this.props.spendingEntryID);
        this.props.closeDeleteSpendingEntryModal();
    }

    render() { 
        return (
            <>
                <Modal
                    isOpen={this.props.isDeleteSpendingEntryModalOpen}
                >
                    <ModalHeader className="delete-spending-entry-modal-title">Delete Spending Entry</ModalHeader>
                    <ModalBody className="delete-spending-entry-modal-body">
                        Are you sure you want to delete this spending entry?
                        <br />
                        <Button 
                            onClick={this.onClickModalClose}
                            className="delete-spending-entry-modal-close"
                        >
                        Close</Button>
                        <Button
                            color="primary"
                            className="delete-spending-entry-button"
                            onClick={this.onDeleteSpendingEntryClick}
                        >
                        Delete</Button>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    
});

export default connect(
    mapStateToProps,
    { closeDeleteSpendingEntryModal, deleteSpendingEntry }
)(DeleteSpendingEntryModal);