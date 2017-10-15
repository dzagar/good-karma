/**
 * Created by nicho on 2017-10-14.
 */
import React from 'react';
import { KarmaOptions } from "./KarmaOptions";
import { FindBloodDonation } from "./FindBloodDonation";
import { FindNonProfit } from "./FindNonProfit";
import { PageHeader, FormGroup, ControlLabel } from 'react-bootstrap';


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
                <PageHeader>How would you like to help? </PageHeader>
                <FormGroup style = {{width: '50%', margin: 'auto', align: 'center', padding: 10 }}>
                    <ControlLabel>Good karma action:</ControlLabel>
                    <KarmaOptions onChange = {this.handleActionChange} selection = {selectedAction}/>
                </FormGroup>
                <span>
                    {findThing}
                </span>
            </div>
        );
    }
}