/**
 * Created by danazagar on 2017-10-14.
 */
import React from 'react';
import { GetSubcategories, nonProfitTypes, nonProfitGroupTitles } from './helpersTemp/NonProfitHelper';

export class FindNonProfit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonCats: [],
            grouping: 1,
            categories: []
        };
        this.handleGroupChange = this.handleGroupChange.bind(this);
    }
    getNonProfitSub(obj){
        return (
            <option value = {obj.code}>{obj.code} - {obj.value}</option>
        );
    }
    categoryCallback(data, self){
        self.setState({
            jsonCats: data
        });
        let catVals = [];
        let cats = [];
        self.state.jsonCats.forEach(function (obj) {
            if (!catVals.includes(obj.ntee_code[0])){
                catVals.push(obj.ntee_code[0]);
                cats = cats.concat(nonProfitTypes[obj.ntee_code[0]]);
            }
        });
        self.setState({
            categories: cats
        });
    }
    componentWillMount(){
        GetSubcategories(this.grouping, this.categoryCallback, this);
    }
    handleGroupChange(e) {
        this.setState({
            grouping: e.target.value
        });
    }
    render() {
        var categories = this.state.categories;
        var subItems = categories.map((obj) => this.getNonProfitSub(obj));
        var groups = nonProfitGroupTitles.
        return (
            <div>
              <select>

              </select>
              <select>
                  {subItems}
              </select>
            </div>
        );
    }
}



