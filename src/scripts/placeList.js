const entryComponent = require("./place")

const listElement = document.querySelector(".PlaceList")

const placeList = (places) => {
    listElement.innerHTML = ""

    places.map(entry => {
        listElement.innerHTML += entryComponent(entry)
    })
}

module.exports = placeList