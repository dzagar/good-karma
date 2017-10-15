/**
 * Created by danazagar on 2017-10-14.
 */
import React from 'react';
import { FormControl } from 'react-bootstrap';

export class LogKarmaLocations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: props.location
        };
    }
    render() {
        return (
            <FormControl type = "text" placeholder = "Enter a non-profit organization"
                         onChange = {this.props.onChange} style = {{width: '50%', margin: 'auto'}}/>
        );
    }
}