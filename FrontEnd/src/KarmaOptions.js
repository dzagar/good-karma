/**
 * Created by danazagar on 2017-10-14.
 */
import React from 'react';
import ReactDOM from 'react-dom';

export class KarmaOptions extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
            <select name = "karmaAction" value = {this.props.selection} onChange = {this.props.onChange}>
                <option value = "act1">Donated blood</option>
                <option value = "act2">Donated money</option>
                <option value = "act3">Volunteered</option>
            </select>
            </div>
        );
    }
}
//ReactDOM.render(<LogKarmaOptions/>, document.getElementById('app'));