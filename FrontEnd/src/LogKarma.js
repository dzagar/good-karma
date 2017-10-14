/**
 * Created by danazagar on 2017-10-14.
 */
import React from 'react';
import { LogKarmaOptions } from './LogKarmaOptions';

export class LogKarma extends React.Component {
    constructor(props) {
        super(props);
        this.handleActionChange = this.handleActionChange.bind(this);
        this.state = {
            karmaAction: ''
        }
    }
    handleActionChange(e) {
        this.setState({
            karmaAction: e.target.value
        });
    }
    render() {
        return (
            <div>
                <LogKarmaOptions onChange = {this.state.karmaAction}/>
            </div>
        );
    }
}