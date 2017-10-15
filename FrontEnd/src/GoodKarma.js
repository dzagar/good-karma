/**
 * Created by nicho on 2017-10-14.
 */
import React from 'react';
import { LogKarma } from "./LogKarma";
import { FindHowToHelp } from "./FindHowToHelp";
import { NavBar } from "./NavBar";


export class GoodKarma extends React.Component {
    constructor(props) {
        super(props);
        this.handleTabChange = this.handleTabChange.bind(this);
        this.state = {
            tabIndex: 0,
        }
    }

    handleTabChange(e) {
        this.setState({
            tabIndex: e.target.value
        });
    }

    render() {

        let displayTab;
        if (this.state.tabIndex == 0)
        {
            displayTab = <LogKarma />
        } else if (this.state.tabIndex == 1)
        {
            displayTab = <FindHowToHelp/>
        }
        return (
            <div>
                <NavBar />
                {displayTab}
            </div>
        );
    }
}