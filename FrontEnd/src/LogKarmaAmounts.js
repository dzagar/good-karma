/**
 * Created by danazagar on 2017-10-14.
 */
import React from 'react';

export class LogKarmaAmounts extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <input type = "text" onChange = {this.props.onChange}/>
        );
    }
}