/**
 * Created by danazagar on 2017-10-14.
 */
import React from 'react';
import ReactDOM from 'react-dom';

export class LogKarmaOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            karmaAction: props.karmaAction
        };
    }
    render() {
        return (
            <select name = "karmaAction" ref = {select => this.karmaAction = select}>
                <option value = "act1">Donated blood</option>
                <option value = "act2">Donated money</option>
                <option value = "act3">Volunteered</option>
            </select>
        );
    }
}
//ReactDOM.render(<LogKarmaOptions/>, document.getElementById('app'));