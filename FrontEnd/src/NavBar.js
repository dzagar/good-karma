/**
 * Created by danazagar on 2017-10-14.
 */
import React from 'react';

export class NavBar extends React.Component {
    constructor(props) {
        super(props);

    }
    generateItem(item) {
        return <div>{item}</div>;
    }
    render() {
        var items = ['Log Karma', 'Find Good Karma Opportunities', 'View My Karma'].map(this.generateItem);
        return (
            <nav>{items}</nav>
        );
    }
}
