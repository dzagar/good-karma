/**
 * Created by danazagar on 2017-10-15.
 */
import React from 'react';
import { Panel, Col } from 'react-bootstrap';
import { GetNaturalDisasters } from "./helpersTemp/NewsFeedHelper";
import { apiKey } from "./apiKey";

export class NewsFeed extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newsResults: []
        };
        this.getArticle = this.getArticle.bind(this);
    }
    componentWillMount(){
        var newsResultsCB = function(self, data){
            self.setState({
               newsResults: data
            });
        }
        GetNaturalDisasters(apiKey, newsResultsCB, this);
    }

    getArticle(obj){
        var trimmedDate = obj.date.toString().split('T',1)[0];
        return (
            <div>
                <Panel header = {obj.headline} href = {obj.url}>
                    {obj.snip}
                    <br/>
                    <br/>
                    <i style={{float: 'left'}}>Source: {obj.source}</i>
                    <i style={{float: 'right'}}>{trimmedDate}</i>
                </Panel>
            </div>
        );
    }
    render(){
        return (
            <div>
                {(this.state.newsResults).map((obj) => this.getArticle(obj))}
            </div>
        );
    }
}
