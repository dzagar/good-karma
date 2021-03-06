/**
 * Created by danazagar on 2017-10-15.
 */
import React from 'react';
import { Table } from 'react-bootstrap';

export class NonProfitResultsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.results
        };
    }

    getDataRow(obj){
        var city = obj.city;
        var state = obj.state;
        var karmaPts = Math.ceil(obj.score);
        var opportunities = "Volunteer, Donate Money"
        var npo = obj.name;
        return (
            <tr>
                <td>{state}</td>
                <td>{city}</td>
                <td>{npo}</td>
                <td>{karmaPts}</td>
                <td>{opportunities}</td>
            </tr>
        );
    }

    render() {
        var results = this.props.results;
        if (results === null){
            results = <tr><td colSpan = '5'>No data to display.</td></tr>;
        } else {
            results = results.map((obj) => this.getDataRow(obj))
        }
        return (
            <Table bordered condensed hover style = {{background: 'white'}}>
                <thead>
                <tr>
                    <th>State</th>
                    <th>City</th>
                    <th>Non-Profit Organization</th>
                    <th>Karma Points</th>
                    <th>Opportunities</th>
                </tr>
                </thead>
                <tbody>
                    {results}
                </tbody>
            </Table>
        );
    }
}