/**
 * Created by nicho on 2017-10-14.
 */
import React from 'react';

export class FindBloodDonation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            state: 'CA'
        }
    }

    render() {
        return (
            <div>
                <span>
                    <label>State: </label>
                    <input type="select"></input>
                </span>
                <span>
                    <label>City: </label>
                    <input type="text"></input>
                </span>
            </div>
        );
    }
}