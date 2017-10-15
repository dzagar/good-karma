/**
 * Created by nicho on 2017-10-14.
 */
import React from 'react';

import { states, GetRedCrossLocations } from "./helpersTemp/BloodDonationHelper";

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

    handleSearch(e) {
        e.preventDefault();
        let setLocationCB = function(self, redCrossLocations){
            self.setState({
                locations: redCrossLocations
            });
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
                            return <option value={ name }>{name}</option>;
                        })}
                    </select>
                </p>
                <p>
                    <label>City: </label>
                    <input type="text" value = {this.state.city} onChange = {this.handleCityChange} />
                </p>
                <input type = "submit" value = "Submit"/>
                </form>
                {this.state.locations.map(function(location){
                    return (
                        <div>
                            <label>{ location }</label>
                            <br />
                        </div>
                    )
                })}
            </div>
        );
    }
}