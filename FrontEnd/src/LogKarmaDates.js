/**
 * Created by danazagar on 2017-10-14.
 */
import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";

export class LogKarmaDates extends React.Component {
    render() {
        return (
            <DatePicker selected = {this.props.date && moment(this.props.date)} onChange = {this.props.onChange}/>
        );
    }
}