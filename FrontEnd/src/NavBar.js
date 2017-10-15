/**
 * Created by danazagar on 2017-10-14.
 */
import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap'

export class NavBar extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a>Good Karma</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem onClick = {()=>{this.props.changeTab(0)}}>News Feed</NavItem>
                    <NavItem onClick = {()=>{this.props.changeTab(1)}}>How To Help</NavItem>
                    <NavItem onClick = {()=>{this.props.changeTab(2)}}>Log Your Karma!</NavItem>
                    <NavItem onClick = {()=>{this.props.changeTab(3)}}>View Previous Contributions</NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem>User Information</NavItem>
                </Nav>
            </Navbar>
        );
    }
}
