/**
 * Created by nicho on 2017-10-15.
 */
import React from 'react';
import $ from 'jquery';
import { Table } from 'react-bootstrap';

export class PreviousContributions extends React.Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.getUserContributions = this.getUserContributions.bind(this);
        this.state = {
            bloodDonations: [],
            cashDonations: [],
            volunteerings: []
        };
    }

    componentDidMount(){
        this.getUserContributions("59e29494c2a8d12a8cfbe722");
    }


    getbloodDonationRow(obj){
        return (
            <tr key={obj.bloodDonation._id}>
                <td>Blood Donation</td>
                <td>{obj.bloodDonation.location}</td>
                <td>{obj.bloodDonation.date}</td>
                <td>8</td>
            </tr>
        );
    }

    getCashDonationRow(obj){
        return (
            <tr key={obj.cashDonation._id}>
                <td>Monetary Donation (${obj.cashDonation.amount})</td>
                <td>{obj.cashDonation.location}</td>
                <td>{obj.cashDonation.date}</td>
                <td>8</td>
            </tr>
        );
    }


    getVolunteeringRow(obj){
        return (
            <tr key={obj.volunteering._id}>
                <td>Monetary Donation ({obj.volunteering.duration}h)</td>
                <td>{obj.volunteering.location}</td>
                <td>{obj.volunteering.date}</td>
                <td>8</td>
            </tr>
        );
    }

    getUserContributions(userID)
    {
        var self = this;
        $.get( "http://localhost:3700/users/" + userID, function( data ) {
            if (data != null && data.user != null)
            {
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
        var donationLength = data.length;
        var donations = [];
        var populated = false;
        data.forEach(function(obj){
            $.get( "http://localhost:3700/bloodDonations/" + obj, function( data2 ) {
                donations.push(data2);
                donationLength--;
                if (donationLength == 0)
                {
                    if (populated == true)
                    {
                        //race condition so just exit
                        return;
                    }

                    self.setState({
                        bloodDonations: donations
                    });
                }
            });
        })
    }

    getVolunteerings(data, self)
    {
        console.log(data);
        var volunteeringsLength = data.length;
        var volunteering = [];
        var populated = false;
        data.forEach(function(obj){
            $.get( "http://localhost:3700/volunteering/" + obj, function( data2 ) {
                console.log(data2);
                volunteering.push(data2);
                volunteeringsLength--;
                if (volunteeringsLength == 0)
                {
                    if (populated == true)
                    {
                        //race condition so just exit
                        return;
                    }

                    self.setState({
                        volunteerings: volunteering
                    });
                }
            });
        })
    }

    getCashDonations(data, self)
    {
        var donationLength = data.length;
        var donations = [];
        var populated = false;
        data.forEach(function(obj){
            $.get( "http://localhost:3700/cashDonations/" + obj, function( data2 ) {
                donations.push(data2);
                donationLength--;
                if (donationLength == 0)
                {
                    if (populated == true)
                    {
                        //race condition so just exit
                        return;
                    }

                    self.setState({
                        cashDonations: donations
                    });
                }
            });
        })
    }

    render() {

        var donations = this.state.bloodDonations;
        var donationItems = donations.map((obj) => this.getbloodDonationRow(obj));

        var cashDonations = this.state.cashDonations;
        var cashDonationItems = cashDonations.map((obj) => this.getCashDonationRow(obj));

        var volunteerings = this.state.volunteerings;
        var volunteeringsItems = volunteerings.map((obj) => this.getVolunteeringRow(obj));
        return (
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>Type</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Karma Points</th>
                </tr>
                </thead>
                <tbody>
                {donationItems}
                {cashDonationItems}
                {volunteeringsItems}
                </tbody>
            </Table>
        );
    }
}