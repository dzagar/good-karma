/**
 * Created by danazagar on 2017-10-14.
 */
import React from 'react';
import { GetSubcategories, nonProfitTypes, nonProfitGroupingNames, GetNonProfitResults } from './helpersTemp/NonProfitHelper';
import { states } from './helpersTemp/BloodDonationHelper';
import { NonProfitResultsContainer } from './NonProfitResultsContainer'
import { ControlLabel, FormControl, Button } from 'react-bootstrap';

export class FindNonProfit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grouping: "A",
            categories: [],
            subcategory: "A01",
            city: "",
            state: "",
            results: []}
        ;
        this.handleGroupChange = this.handleGroupChange.bind(this);
        this.handleSubcategoryChange = this.handleSubcategoryChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    getNonProfitSub(obj){
        return (
            <option value = {obj.code}>{obj.code} - {obj.value}</option>
        );
    }
    getNonProfitGroup(key, val){
        return (
            <option value = {key}>{val}</option>
        );
    }
    categoryCallback(data, self){
        self.setState({
            categories: data
        });
    }
    componentWillMount(){
        GetSubcategories(this.state.grouping, this.categoryCallback, this);
    }
    handleGroupChange(e) {
        GetSubcategories(e.target.value, this.categoryCallback, this);
        this.setState({
            grouping: e.target.value,
            subcategory: nonProfitTypes[e.target.value][0].code
        });
    }
    handleSubcategoryChange(e) {
        this.setState({
            subcategory: e.target.value
        });
    }
    handleStateChange(e) {
        this.setState({
            state: e.target.value
        });
    }

    handleCityChange(e) {
        this.setState({
            city: e.target.value
        });
    }
    handleSearch(e) {
        e.preventDefault();
        let locationCallback = function(self, results){
            self.setState({
                results: results
            });
        };
        GetNonProfitResults(this.state.city, this.state.state, this.state.grouping, this.state.subcategory, this, locationCallback);
    }
    render() {
        var categories = this.state.categories;
        var subItems = categories.map((obj) => this.getNonProfitSub(obj));
        var groups = [];
        for (var key in nonProfitGroupingNames) {
            groups.push(this.getNonProfitGroup(key, nonProfitGroupingNames[key]));
        }
        return (
            <div>
                <form onSubmit = {this.handleSearch}>
                  <ControlLabel>City:</ControlLabel>
                  <FormControl type="text" value = {this.state.city} onChange = {this.handleCityChange} style = {{width: '50%', margin: 'auto'}}/>
                  <ControlLabel>State:</ControlLabel>
                  <FormControl componentClass = "select" name = "state" value = {this.state.state} onChange = {this.handleStateChange} style = {{width: '50%', margin: 'auto'}}>
                      {states.map(function(name){
                          return <option key={name} value={ name }>{name}</option>;
                      })}
                  </FormControl>
                  <ControlLabel>Group:</ControlLabel>
                  <FormControl componentClass = "select" onChange = {this.handleGroupChange} style = {{width: '50%', margin: 'auto'}}>
                      {groups}
                  </FormControl>
                  <ControlLabel>Subcategory:</ControlLabel>
                  <FormControl componentClass = "select" onChange = {this.handleSubcategoryChange} style = {{width: '50%', margin: 'auto'}}>
                      {subItems}
                  </FormControl>
                    <Button bsStyle = "primary" bsSize = "large" type = "submit" value = "Submit" style = {{margin: 10}}>Submit</Button>
                </form>
                <NonProfitResultsContainer results = {this.state.results}/>
            </div>
        );
    }
}



