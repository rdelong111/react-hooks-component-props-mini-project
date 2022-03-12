import React from "react";

function Article({
    title,
    date="January 1, 1970",
    preview,
    minutes
}) {
    const emojiS = minutes < 30 ?
        whichEmoji('☕️', Math.ceil(minutes / 5)):
        whichEmoji('🍱', Math.ceil(minutes / 10));

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} · {emojiS} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

function whichEmoji(theE, amount) {
    let ans = '';
    for (let i = 0; i < amount; i++) {
        ans += theE;
    }
    return ans;
}

export default Article;