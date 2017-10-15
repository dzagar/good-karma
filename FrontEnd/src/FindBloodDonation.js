/**
 * Created by nicho on 2017-10-14.
 */
import React from 'react';

import { states, GetRedCrossLocations } from "./helpersTemp/BloodDonationHelper";
import { Table } from 'react-bootstrap';

export class FindBloodDonation extends React.Component {
    constructor(props) {
        super(props);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            city: '',
            state: 'NY',
            locations: []
        }
    }

    getDataRow(obj){
        console.log(obj);
        var siteLine = obj.siteLine1.split("<br>").join(" ");
        var city = obj.siteCity;
        var state = obj.siteState;
        var startTime = obj.startTime;
        var endTime = obj.endTime
        var driveDate = obj.driveDate;
        return (
            <tr>
                <td>{siteLine}</td>
                <td>{city}</td>
                <td>{state}</td>
                <td>{driveDate}</td>
                <td>{startTime}</td>
                <td>{endTime}</td>
            </tr>
        );
    }

    handleSearch(e) {
        e.preventDefault();
        let setLocationCB = function(self, redCrossLocations){
            self.setState({
                locations: redCrossLocations
            });

            console.log(redCrossLocations);
        };
        GetRedCrossLocations(this.state.city, this.state.state, this, setLocationCB);
    }

    handleStateChange(e) {
        this.setState({
            state: e.target.value
        });
    }

    handleCityChange(e) {
        this.setState({
            city: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSearch}>
                <p>
                    <label>State: </label>
                    <select name = "donationState" value = {this.state.state} onChange = {this.handleStateChange}>
                        {states.map(function(name){
                            return <option key={name} value={ name }>{name}</option>;
                        })}
                    </select>
                </p>
                <p>
                    <label>City: </label>
                    <input type="text" value = {this.state.city} onChange = {this.handleCityChange} />
                </p>
                <input type = "submit" value = "Submit"/>
                </form>

                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Date</th>
                        <th>Open Time</th>
                        <th>Close Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.locations.map((obj) => this.getDataRow(obj))}
                    </tbody>
                </Table>
            </div>
        );
    }
}