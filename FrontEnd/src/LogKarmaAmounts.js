/**
 * Created by danazagar on 2017-10-14.
 */
import React from 'react';
import { FormControl } from 'react-bootstrap';

export class LogKarmaAmounts extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <FormControl type = "text" placeholder = "Enter an amount"
                         onChange = {this.props.onChange} style = {{width: '50%', margin: 'auto'}}/>
        );
    }
}