import React, { Component } from 'react';
import {
    Jumbotron,
    Button
  } from 'reactstrap';

import AddSpendingEntryButton from '../containers/AddSpendingEntryButton';

class HomepageJumbotron extends React.Component {
    render() {
        return (
            <>
                <div>
                    <Jumbotron>
                        <h1 className="display-3">Hello, Clare!</h1>
                        <p className="lead">This is a simple finance management app for all your planning needs! You can set monthly budgets, track spendings, and monitor your alerts and dashboards!</p>
                            <hr className="my-2" />
                            <p>You can add purchases and learn more below to get started!</p>
                            <p className="lead">
                            <Button color="primary">Learn More</Button>
                            <AddSpendingEntryButton />
                        </p>
                    </Jumbotron>
                </div>
            </>
        );
    }
}

export default HomepageJumbotron;