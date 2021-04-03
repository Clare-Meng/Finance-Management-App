import React, { Component } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { closeDeleteSpendingEntryModal } from '../../actions/deleteSpendingEntryModalActions';

class DeleteSpendingEntryModal extends React.Component {

    onClickModalClose = () => {
        this.props.closeDeleteSpendingEntryModal();
    }

    render() { 
        return (
            <>
                <Modal
                    isOpen={this.props.isDeleteSpendingEntryModalOpen}
                >
                    <ModalHeader>Modal Header</ModalHeader>
                    <ModalBody>
                        Modal Body
                    </ModalBody>
                    <Button onClick={this.onClickModalClose}>Close</Button>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    
});

export default connect(
    mapStateToProps,
    { closeDeleteSpendingEntryModal }
)(DeleteSpendingEntryModal);