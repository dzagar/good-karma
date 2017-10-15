/**
 * Created by danazagar on 2017-10-14.
 */
import React from 'react';
import { GetSubcategories, nonProfitTypes } from './helpersTemp/NonProfitHelper';

export class FindNonProfit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonCats: [],
            categories: []
        };
    }
    getNonProfit(obj){
        return (
            <option value = {obj.code}>{obj.code} - {obj.value}</option>
        );
    }
    categoryCallback(data, self){
        self.setState({
            jsonCats: data
        });
        self.state.jsonCats.forEach(function (obj) {
            var group = nonProfitTypes[obj.ntee_code[0]];
            self.setState({
               categories: group
            });
        });
    }
    componentWillMount(){
        GetSubcategories(1, this.categoryCallback, this);
    }
    render() {
        var cats = this.state.categories;
        var items = cats.map((obj) => this.getNonProfit(obj));
        return (
          <select>
              {items}
          </select>
        );
    }
}



