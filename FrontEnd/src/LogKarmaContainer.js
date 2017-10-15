/**
 * Created by danazagar on 2017-10-14.
 */
import React from 'react';
import { LogKarmaLocations } from './LogKarmaLocations';
import { LogKarmaDates } from './LogKarmaDates';
import { LogKarmaDurations } from './LogKarmaDurations';
import { LogKarmaAmounts } from './LogKarmaAmounts';
import { postNewBloodDonation } from './helpersTemp/BloodDonationHelper';
import { postNewDonation, postNewVolunteering } from './helpersTemp/NonProfitHelper';
import moment from 'moment';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

export class LogKarmaContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleDurationChange = this.handleDurationChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            location: '',
            date: moment(),
            duration: '',
            amount: ''
        }
    }
    handleLocationChange(e) {
        this.setState({
            location: e.target.value
        });
    }
    handleDateChange(date) {
        this.setState({
            date: date
        });
    }

    handleDurationChange(e) {
        this.setState({
            duration: e.target.value
        });
    }

    handleAmountChange(e) {
        this.setState({
            amount: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.selection === "act1"){
            postNewBloodDonation(this.state.date, this.state.location, "59e29494c2a8d12a8cfbe722");
        } else if (this.props.selection === "act2"){
            postNewDonation(this.state.date, this.state.location, this.state.amount , "59e29494c2a8d12a8cfbe722");
        } else if (this.props.selection === "act3"){
            postNewVolunteering(this.state.date, this.state.location, this.state.duration, "59e29494c2a8d12a8cfbe722");
        }
    }
    render() {
        const selectedKarma = this.props.selection;
        let extraParam;
        if (selectedKarma === "act2"){
            extraParam = <FormGroup><ControlLabel>Amount donated:</ControlLabel><LogKarmaAmounts onChange = {this.handleAmountChange}/></FormGroup>
        } else if (selectedKarma === "act3"){
            extraParam = <FormGroup><ControlLabel>Duration (hours):</ControlLabel><LogKarmaDurations onChange = {this.handleDurationChange}/></FormGroup>
        }

        return (
            <form onSubmit = {this.handleSubmit}>
                <FormGroup>
                    <ControlLabel>Location:</ControlLabel>
                        <LogKarmaLocations onChange = {this.handleLocationChange}/>
                    <ControlLabel>Date:</ControlLabel>
                        <LogKarmaDates date = {this.state.date} onChange = {this.handleDateChange}/>
                    {extraParam}
                </FormGroup>
                <Button bsStyle = "primary" bsSize = "large" type = "submit" value = "Submit">Submit</Button>
            </form>
        )
    }
}