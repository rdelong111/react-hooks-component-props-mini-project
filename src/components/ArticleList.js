import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    const thePosts = posts.map((singleP) => {
        return (
            <Article
                key={singleP.id}
                title={singleP.title}
                date={singleP.data}
                preview={singleP.preview}
                minutes={singleP.minutes}
            />
        )
    })
    return (
        <main>
            {thePosts}
        </main>
    )
}

export default ArticleList;