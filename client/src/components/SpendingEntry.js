import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSpendingEntries } from '../actions/spendingEntryActions';

class SpendingEntry extends React.Component {

    componentDidMount() {
        this.props.getSpendingEntries();
    }
    render() {
        const { spendingEntries } = this.props.spendingEntry;
        console.log("Printing Spending Entries");
        console.log(spendingEntries);
        return (
            <>
                
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
    { getSpendingEntries }
)(SpendingEntry);