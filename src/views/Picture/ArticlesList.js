import React, {Fragment} from 'react';
import articleContent from "./article-content";

const ArticlesList = () => {

    return(
    <Fragment>
        <h1>Articles</h1>
        {articleContent.map(article=>(
            //<link className="article-list-item" to={`/article/${article.title}`}>
                <h3>{article.title}</h3>
            //</link>
        ))}
    </Fragment>
    )
};

export default ArticlesList;