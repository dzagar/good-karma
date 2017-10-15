/**
 * Created by nicho on 2017-10-14.
 */
import React from 'react';

import { states } from "./helpersTemp/BloodDonationHelper";

export class FindBloodDonation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            state: 'NY'
        }
    }

    render() {
        return (
            <div>

                <form onSubmit = {this.handleSubmit}>
                <p>
                    <label>State: </label>
                    <select name = "karmaAction" value = {this.props.selection} onChange = {this.props.onChange}>
                        {states.map(function(name){
                            return <option value={ name }>{name}</option>;
                        })}
                    </select>
                </p>
                <p>
                    <label>City: </label>
                    <input type="text"></input>
                </p>
                <input type = "submit" value = "Submit"/>
                </form>
            </div>
        );
    }
}