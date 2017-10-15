/**
 * Created by nicho on 2017-10-14.
 */
import React from 'react';
import { LogKarma } from "./LogKarma";
import { FindHowToHelp } from "./FindHowToHelp";
import { NavBar } from "./NavBar";
import { PreviousContributions } from "./PreviousContributions";
import { NewsFeed } from "./NewsFeed";
import { UserProfile } from "./UserProfile";


export class GoodKarma extends React.Component {
    constructor(props) {
        super(props);
        this.handleTabChange = this.handleTabChange.bind(this);
        this.state = {
            tabIndex: 2,
        }
    }

    handleTabChange(val) {
        console.log(val);
        this.setState({
            tabIndex: val
        });
    }

    render() {
        const selectedTabIndex = this.state.tabIndex;
        let displayTab;
        if (this.state.tabIndex === 0) {
            displayTab = <NewsFeed/>
        }
        if (this.state.tabIndex === 1) {
            displayTab = <FindHowToHelp/>
        }
        else if (this.state.tabIndex === 2) {
            displayTab = <LogKarma />
        }
        else if (this.state.tabIndex === 3) {
            displayTab = <PreviousContributions/>
        }
        else if (this.state.tabIndex === 4) {
            displayTab = <UserProfile/>
        }
        return (
            <div>
                <NavBar changeTab = {this.handleTabChange} selectedVal = {selectedTabIndex} />
                {displayTab}
            </div>
        );
    }
}