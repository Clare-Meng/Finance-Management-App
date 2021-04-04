import React, { Component } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { closeAddSpendingEntryModal } from '../../actions/addSpendingEntryModalActions';

import AddSpendingEntryForm from '../../containers/AddSpendingEntryForm';

import '../../styling/AddSpendingEntryModal.css';

class AddSpendingEntryModal extends React.Component {

    onAddSpendingEntryModalCloseClick = () => {
        this.props.closeAddSpendingEntryModal();
    }

    render() {
        return (
            <>
                <Modal
                    isOpen={this.props.isAddSpendingEntryModalOpen}
                    className="add-spending-entry-modal-container"
                >
                    <ModalHeader
                        className="add-spending-entry-modal-title"
                    >Add Purchases</ModalHeader>
                    <ModalBody>
                        <AddSpendingEntryForm />
                        <Button
                            onClick={this.onAddSpendingEntryModalCloseClick}
                            className="add-spending-entry-modal-close"
                        >Close</Button>
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
    { closeAddSpendingEntryModal }
)(AddSpendingEntryModal);