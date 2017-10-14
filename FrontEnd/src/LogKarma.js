/**
 * Created by danazagar on 2017-10-14.
 */
import React from 'react';
import { KarmaOptions } from './KarmaOptions';
import { LogKarmaContainer } from './LogKarmaContainer';

export class LogKarma extends React.Component {
    constructor(props) {
        super(props);
        this.handleActionChange = this.handleActionChange.bind(this);
        this.state = {
            karmaAction: 'act1'
        }
    }
    handleActionChange(e) {
        this.setState({
            karmaAction: e.target.value
        });
    }
    render() {
        const selectedAction = this.state.karmaAction;
        return (
            <div>
                <p> What good deed have you completed?</p>
                <KarmaOptions onChange = {this.handleActionChange} selection = {selectedAction}/>
                <LogKarmaContainer selection = {selectedAction}/>
            </div>
        );
    }
}
