/**
 * Created by danazagar on 2017-10-14.
 */
import React from 'react';

export class LogKarmaLocations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: props.location
        };
    }
    render() {
        return (
            <input type = "text" ref = {input => this.location = input}/>
        );
    }
}