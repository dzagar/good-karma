/**
 * Created by danazagar on 2017-10-14.
 */
import React from 'react';
import { LogKarmaOptions } from './LogKarmaOptions';
import { LogKarmaContainer } from './LogKarmaContainer';

export class LogKarma extends React.Component {
    constructor(props) {
        super(props);
        this.handleActionChange = this.handleActionChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.state = {
            karmaAction: 'act1',
            location: '',
            date: ''
        }
    }
    handleActionChange(e) {
        this.setState({
            karmaAction: e.target.value
        });
    }
    handleLocationChange(e) {
        this.setState({
            location: e.target.value
        });
    }
    handleDateChange(e) {
        this.setState({
           date: e.target.value
        });
    }
    render() {
        const selectedAction = this.state.karmaAction;
        return (
            <div>
                <LogKarmaOptions onChange = {this.handleActionChange} selection = {selectedAction}/>
                <LogKarmaContainer selection = {selectedAction} onLocationChange = {this.handleLocationChange} onDateChange = {this.handleDateChange}/>
            </div>
        );
    }
}
