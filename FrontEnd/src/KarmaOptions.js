/**
 * Created by danazagar on 2017-10-14.
 */
import React from 'react';
import { FormControl } from 'react-bootstrap';

export class KarmaOptions extends React.Component {
    render() {
        return (
            <FormControl componentClass = "select" name = "karmaAction" value = {this.props.selection} onChange = {this.props.onChange}>
                <option value = "act1">Donate blood</option>
                <option value = "act2">Donate money</option>
                <option value = "act3">Volunteer</option>
            </FormControl>
        );
    }
}