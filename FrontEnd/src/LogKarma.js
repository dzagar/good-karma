/**
 * Created by danazagar on 2017-10-14.
 */
import React from 'react';
import { KarmaOptions } from './KarmaOptions';
import { LogKarmaContainer } from './LogKarmaContainer';
import { PageHeader, FormGroup, ControlLabel } from 'react-bootstrap';

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
                <PageHeader> What good deed would you like to log?</PageHeader>
                <FormGroup style = {{width: '50%', margin: 'auto', align: 'center', padding: 10 }}>
                    <ControlLabel>Good karma action:</ControlLabel>
                    <KarmaOptions onChange = {this.handleActionChange} selection = {selectedAction}/>
                </FormGroup>
                <LogKarmaContainer selection = {selectedAction}/>
            </div>
        );
    }
}
