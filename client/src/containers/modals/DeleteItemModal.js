import React, { Component } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { closeDeleteItemModal } from '../../actions/deleteItemModalActions';
import { deleteItem, getSpendingEntries } from '../../actions/spendingEntryActions';

import '../../styling/DeleteItemModal.css';

class DeleteItemModal extends React.Component {

    onClickDeleteItemModalClose = () => {
        this.props.closeDeleteItemModal();
    }

    onDeleteItemClick = () => {
        this.props.deleteItem(this.props.itemID);
        this.props.getSpendingEntries();
        this.props.closeDeleteItemModal();
    }

    render() {
        return (
            <>
                <Modal
                    isOpen={this.props.isDeleteItemModalOpen}
                >
                    <ModalHeader className="delete-item-modal-title">Delete Item</ModalHeader>
                    <ModalBody className="delete-item-modal-body">
                        Are you sure you want to delete this item?
                        <br />
                        <Button 
                            onClick={this.onClickDeleteItemModalClose}
                            className="delete-item-modal-close"
                        >Close</Button>
                        <Button
                            color="primary"
                            className="delete-item-button"
                            onClick={this.onDeleteItemClick}
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
    { closeDeleteItemModal, deleteItem, getSpendingEntries }
)(DeleteItemModal);