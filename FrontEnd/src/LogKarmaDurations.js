/**
 * Created by danazagar on 2017-10-14.
 */
import React from 'react';

export class LogKarmaDurations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            duration: props.duration
        };
    }
    render() {
        return (
            <input type = "text" onChange = {this.props.onChange}/>
        );
    }
}