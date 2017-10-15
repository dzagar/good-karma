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
        var subcategory = obj.ntee_code;
        var opportunities = "Volunteer, Donate Money"
        var npo = obj.name;
        return (
            <tr>
                <td>{state}</td>
                <td>{city}</td>
                <td>{npo}</td>
                <td>{subcategory}</td>
                <td>{opportunities}</td>
            </tr>
        );
    }

    render() {
        var results = this.props.results;
        return (
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>State</th>
                    <th>City</th>
                    <th>Non-Profit Organization</th>
                    <th>Subcategory / Grouping</th>
                    <th>Opportunities</th>
                </tr>
                </thead>
                <tbody>
                    {results.map((obj) => this.getDataRow(obj))}
                </tbody>
            </Table>
        );
    }
}