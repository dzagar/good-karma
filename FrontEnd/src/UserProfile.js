/**
 * Created by nicho on 2017-10-15.
 */
import React from 'react';
import { Table } from 'react-bootstrap';

export class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bloodDonationTotal: null,
            cashDonationTotal: null,
            volunteeringTotal: null,
            bloodDonationPoints: null,
            cashDonationPoints: null,
            volunteeringPoints: null,
        }
    }
    render() {
        return (
            <div>
                <label>First Name: </label><br/>
                <label>Last Name: </label><br/>
                <label>Email: </label><br/>
                <label>Total Karma: </label><br/>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>Type</th>
                        <th>Total</th>
                        <th>Karma Points</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Blood Donation</td>
                            <td>{this.state.bloodDonationTotal}</td>
                            <td>{this.state.bloodDonationPoints}</td>
                        </tr>
                        <tr>
                            <td>Monetary Donation</td>
                            <td>{this.state.cashDonationTotal}</td>
                            <td>{this.state.cashDonationPoints}</td>
                        </tr>
                        <tr>
                            <td>Volunteering</td>
                            <td>{this.state.volunteeringTotal}</td>
                            <td>{this.state.volunteeringPoints}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}