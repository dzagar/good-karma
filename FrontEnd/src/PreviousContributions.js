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
            bloodDonations: []
        };
    }

    componentDidMount(){
        this.getUserContributions("59e29494c2a8d12a8cfbe722");
    }


    getNonProfitSub(obj){
        return (
        <tr key={obj.bloodDonation._id}>
            <td>Blood Donation</td>
            <td>{obj.bloodDonation.location}</td>
            <td>{obj.bloodDonation.date}</td>
            <td>8</td>
        </tr>
        );
    }

    getUserContributions(userID)
    {
        var self = this;
        $.get( "http://localhost:3700/users/" + userID, function( data ) {
            if (data != null && data.user != null && data.user.bloodDonations.length > 0)
            {
                var donationLength = data.user.bloodDonations.length;
                var donations = [];
                var populated = false;
                data.user.bloodDonations.forEach(function(obj){
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
        });
    }

    render() {

        var donations = this.state.bloodDonations;
        var subItems = donations.map((obj) => this.getNonProfitSub(obj));
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
                {subItems}
                </tbody>
            </Table>
        );
    }
}