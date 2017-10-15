/**
 * Created by nicho on 2017-10-15.
 */
import React from 'react';
import { Table } from 'react-bootstrap';
import $ from 'jquery';

export class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            karma: null,
            bloodDonationTotal: null,
            cashDonationTotal: null,
            volunteeringTotal: null,
            bloodDonationPoints: null,
            cashDonationPoints: null,
            volunteeringPoints: null,
        }
    }

    componentWillMount(){
        var self = this;
        $.get( "http://localhost:3700/users/" + "59e29494c2a8d12a8cfbe722", function( data ) {
            if (data != null && data.user != null)
            {
                self.setState({
                    firstName: data.user.firstName,
                    lastName: data.user.lastName,
                    email: data.user.email,
                    karma: data.user.karma,
                })
                if (data.user.bloodDonations != null && data.user.bloodDonations.length > 0)
                {
                    self.getBloodDonations(data.user.bloodDonations, self);
                }

                if (data.user.cashDonations != null && data.user.cashDonations.length > 0)
                {
                    self.getCashDonations(data.user.cashDonations, self);
                }

                if (data.user.volunteering != null && data.user.volunteering.length > 0)
                {
                    self.getVolunteerings(data.user.volunteering, self);
                }
            }
        });
    }


    getBloodDonations(data, self)
    {
        self.setState({
            bloodDonationTotal: data.length,
            bloodDonationPoints: data.length * 3
        })
    }

    getVolunteerings(data, self)
    {
        var volunteeringsLength = data.length;
        var volunteeringDuration = 0;
        var populated = false;
        data.forEach(function(obj){
            $.get( "http://localhost:3700/volunteering/" + obj, function( data2 ) {
                if (!isNaN(data2.duration))
                {
                    volunteeringDuration += parseInt(data2.duration);
                }
                volunteeringsLength--;
                if (volunteeringsLength == 0)
                {
                    if (populated == true)
                    {
                        //race condition so just exit
                        return;
                    }

                    self.setState({
                        volunteeringTotal: volunteeringsLength,
                        volunteeringPoints: volunteeringsLength * 5
                    });
                }
            });
        })
    }

    getCashDonations(data, self)
    {
        var donationLength = data.length;
        var donationsTotal = 0;
        var populated = false;
        data.forEach(function(obj){
            $.get( "http://localhost:3700/cashDonations/" + obj, function( data2 ) {
                if (!isNaN(data2.duration))
                {
                    donationsTotal += parseInt(data2.duration);
                }
                donationLength--;
                if (donationLength == 0)
                {
                    if (populated == true)
                    {
                        //race condition so just exit
                        return;
                    }

                    self.setState({
                        cashDonationTotal: donationsTotal,
                        cashDonationPoints: donationsTotal / 2
                    });
                }
            });
        })
    }

    render() {
        return (
            <div>
                <label>First Name: {this.state.firstName}</label><br/>
                <label>Last Name: {this.state.lastName}</label><br/>
                <label>Email: this.state.email}</label><br/>
                <label>Total Karma: {this.state.karma}</label><br/>
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