/**
 * Created by danazagar on 2017-10-15.
 */
import React from 'react';
import { Panel, PageHeader, Button } from 'react-bootstrap';
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
                <Panel header = {obj.headline} >
                    {obj.snip}
                    <br/>
                    <br/>
                    <Button bsStyle = 'primary' bsSize = 'medium' href = {obj.url} target = "_blank">Read more</Button>
                    <br/>
                    <i style={{float: 'left'}}>Source: {obj.source}</i>
                    <i style={{float: 'right'}}>{trimmedDate}</i>
                </Panel>
            </div>
        );
    }
    render(){
        return (
            <div style = {{width: '90%', margin:'auto'}}>
                <PageHeader>Stay up-to-date on relief efforts from trusted news sources.</PageHeader>
                {(this.state.newsResults).map((obj) => this.getArticle(obj))}
            </div>
        );
    }
}
