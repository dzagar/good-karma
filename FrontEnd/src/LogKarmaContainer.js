/**
 * Created by danazagar on 2017-10-14.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { LogKarmaLocations } from './LogKarmaLocations';
import { LogKarmaDates } from './LogKarmaDates';
import { LogKarmaDurations } from './LogKarmaDurations';
import { LogKarmaAmounts } from './LogKarmaAmounts';
import { postNewBloodDonation } from './helpersTemp/BloodDonationHelper';
import moment from 'moment';

export class LogKarmaContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
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
    handleSubmit(e) {
        e.preventDefault();
        if (this.props.selection === "act1"){
            postNewBloodDonation("2015-01-01", "london", "59e29494c2a8d12a8cfbe722");
        } else if (this.props.selection === "act2"){
            alert('fake post');
        } else if (this.props.selection === "act3"){
            alert('fake post 2');
        }
    }
    render() {
        const selectedKarma = this.props.selection;
        let extraParam;
        if (selectedKarma === "act2"){
            extraParam = <label>Amount donated<LogKarmaAmounts onChange = {this.handleAmountChange}/></label>
        } else if (selectedKarma === "act3"){
            extraParam = <label>Duration (hours)<LogKarmaDurations onChange = {this.handleDurationChange}/></label>
        }

        return (
            <form onSubmit = {this.handleSubmit}>
                <label>Location:
                <LogKarmaLocations onChange = {this.handleLocationChange}/>
                </label>
                <label>Date:
                    <LogKarmaDates onChange = {this.handleDateChange}/>
                </label>
                {extraParam}
                <input type = "submit" value = "Submit"/>
            </form>
        )
    }
}