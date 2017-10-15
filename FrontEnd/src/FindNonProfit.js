/**
 * Created by danazagar on 2017-10-14.
 */
import React from 'react';
import { GetSubcategories, nonProfitTypes, nonProfitGroupingNames } from './helpersTemp/NonProfitHelper';
import { states } from './helpersTemp/BloodDonationHelper';

export class FindNonProfit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonCats: [],
            grouping: "A",
            categories: [],
            subcategory: "A01",
            city: "New York",
            state: "NY"
        };
        this.handleGroupChange = this.handleGroupChange.bind(this);
        this.handleSubcategoryChange = this.handleSubcategoryChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
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
                  <label>City:
                  <input type="text" value = {this.state.city} onChange = {this.handleCityChange} />
                  </label>
                  <label>State:
                  <select name = "state" value = {this.state.state} onChange = {this.handleStateChange}>
                      {states.map(function(name){
                          return <option key={name} value={ name }>{name}</option>;
                      })}
                  </select>
                  </label>
                  <label>Group:
                  <select onChange = {this.handleGroupChange}>
                      {groups}
                  </select>
                  </label>
                  <label>Subcategory:
                  <select onChange = {this.handleSubcategoryChange}>
                      {subItems}
                  </select>
                  </label>
                    <input type = "submit" value = "Submit"/>
                </form>
            </div>
        );
    }
}



