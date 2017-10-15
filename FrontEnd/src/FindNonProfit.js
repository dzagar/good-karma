/**
 * Created by danazagar on 2017-10-14.
 */
import React from 'react';
import { GetSubcategories, nonProfitTypes, nonProfitGroupingNames } from './helpersTemp/NonProfitHelper';

export class FindNonProfit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonCats: [],
            grouping: "A",
            categories: []
        };
        this.handleGroupChange = this.handleGroupChange.bind(this);
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
            jsonCats: data
        });
        let catVals = [];
        let cats = [];
        self.state.jsonCats.forEach(function (obj) {
            if (obj.ntee_code != null && !catVals.includes(obj.ntee_code[0])){
                catVals.push(obj.ntee_code[0]);
                cats = cats.concat(nonProfitTypes[obj.ntee_code[0]]);
            }
        });
        self.setState({
            categories: cats
        });
    }
    componentWillMount(){
        GetSubcategories(this.state.grouping, this.categoryCallback, this);
    }
    handleGroupChange(e) {
        GetSubcategories(e.target.value, this.categoryCallback, this);
        this.setState({
            grouping: e.target.value
        });
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
              <select onChange = {this.handleGroupChange}>
                  {groups}
              </select>
              <select>
                  {subItems}
              </select>
            </div>
        );
    }
}



