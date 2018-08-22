const entryComponent = (item) => {
    return `
        <div class="entry">
            <header class="entry__header">
                <h2>${item.name}</h2>
            </header>
            <article class="entry__content">
                ${item.content}
            </article>
            <button class="entry__delete" id="delete--${item.id}">Delete</button>
        </div>
    `
}

module.exports = entryComponent