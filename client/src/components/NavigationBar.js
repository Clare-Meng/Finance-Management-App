import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css';

class NavigationBar extends React.Component {

    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <>
               <div>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">Home</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/monthly_budget">Monthly Budget</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Planning</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Total Budget</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Options
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Spending History
                                        </DropdownItem>
                                        <DropdownItem>
                                            Budget Summary
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Sign Out
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                        </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </>
        );
    }
}

export default NavigationBar;