/**
 * Created by danazagar on 2017-10-15.
 */
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
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
        return (
            <div className="modal">
                <Modal.Dialog>
                    <Modal.Header href = {obj.url}>
                        <Modal.Title>{obj.headline}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {obj.snippet}
                    </Modal.Body>

                    <Modal.Footer>
                        Source: {obj.source} - {obj.date}
                        <Button>Close</Button>
                    </Modal.Footer>

                </Modal.Dialog>
            </div>
        );
    }
    render(){
        var results = this.state.newsResults;
        results.forEach(function(snip) {
            this.getArticle(snip);
        });
        return results;
        // return (
        //     <div>
        //         {results.map((obj) => this.getArticle(obj))}
        //     </div>
        // );
    }
}
