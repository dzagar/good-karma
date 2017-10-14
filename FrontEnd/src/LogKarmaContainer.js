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

export class LogKarmaContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            karmaAction: props.selection,
            location: '',
            date: '',
            duration: '',
            amount: ''
        }
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
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.karmaAction === "act1"){
            alert('HOLYFUUUCCCKKKKKK');
            postNewBloodDonation("2015-01-01", "london", "59e29494c2a8d12a8cfbe722");
        }
    }
    render() {
        const selectedKarma = this.props.selection;
        let extraParam;
        if (selectedKarma === "act2"){
            extraParam = <LogKarmaDurations onChange = {this.handleDurationChange}/>
        } else if (selectedKarma === "act3"){
            extraParam = <LogKarmaAmounts onChange = {this.handleAmountChange}/>
        }

        return (
            <form onSubmit = {this.handleSubmit}>
                <LogKarmaLocations onChange = {this.handleLocationChange}/>
                <LogKarmaDates onChange = {this.handleDateChange}/>
                {extraParam}
                <input type = "submit" value = "Submit"/>
            </form>
        )
    }
}