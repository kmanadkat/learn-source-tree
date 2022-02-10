const addListItem = () => {
    const newListItem = document.createElement("li")
    newListItem.innerHTML = "Integrated main.js file"
    document.querySelector('ul').appendChild(newListItem)
}

addListItem()