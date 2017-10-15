/**
 * Created by danazagar on 2017-10-14.
 */
import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export class LogKarmaDates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: props.date
        };
    }
    render() {
        return (
            <DatePicker selected = {this.state.date} onChange = {this.props.onChange}/>
        );
    }
}