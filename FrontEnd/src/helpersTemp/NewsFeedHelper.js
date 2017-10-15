/**
 * Created by danazagar on 2017-10-15.
 */
import $ from 'jquery';

export function GetNaturalDisasters(callback, self){
    $.get("http://api.nytimes.com/svc/search/v2/articlesearch.json?q=disaster&q=natural&q=devastation&begin_date=20170901&end_date=20171015&api-key=986e80ce85024363953d86cf8b55e315", function(data){
        var newsSnippets = [];
        data.response.docs.forEach(function(snip){
            var article = {
                url: snip.web_url,
                headline: snip.headline.main,
                source: snip.source,
                snip: snip.snippet,
                date: snip.pub_date
            };
            newsSnippets.push(article);
        });
        callback(self, newsSnippets);
    });
}