/**
 * Created by danazagar on 2017-10-14.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { LogKarmaLocations } from './LogKarmaLocations';

export class LogKarmaContainer extends React.Component {
    render() {
        const selectedKarma = this.props.selection;
        if (selectedKarma === "act1") {
            return (
                <LogKarmaLocations onChange = {this.props.onLocationChange}/>
            );
        } else if (selectedKarma === "act2") {
            return (
                <p>hhahahaaaa</p>
            );
        } else if (selectedKarma === "act3") {
            return (
                <p>boop</p>
            );
        }
    }
}