/**
 * Created by danazagar on 2017-10-14.
 */
import React from 'react';

export class LogKarmaDates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: props.date
        };
    }
    render() {
        return (
            <input type = "text" onChange = {this.props.onChange}/>
        );
    }
}