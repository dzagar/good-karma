/**
 * Created by nicho on 2017-10-14.
 */
import React from 'react';
import { KarmaOptions } from "./KarmaOptions";
import { FindBloodDonation } from "./FindBloodDonation";
import { FindNonProfit } from "./FindNonProfit";


export class FindHowToHelp extends React.Component {
    constructor(props) {
        super(props);
        this.handleActionChange = this.handleActionChange.bind(this);
        this.state = {
            karmaAction: 'act1',
        }
    }

    handleActionChange(e) {
        this.setState({
            karmaAction: e.target.value
        });
    }

    render() {
        const selectedAction = this.state.karmaAction;
        let findThing;
        if (selectedAction == "act1")
        {
            findThing = <FindBloodDonation />;
        }
        else if (selectedAction == "act2" || selectedAction == "act3")
        {
            findThing = <FindNonProfit />
        }
        return (
            <div>
                <span>
                    <label>How would you like to help: </label>
                    <KarmaOptions onChange = {this.handleActionChange} selection = {selectedAction}/>
                </span>
                <span>
                    {findThing}
                </span>
            </div>
        );
    }
}