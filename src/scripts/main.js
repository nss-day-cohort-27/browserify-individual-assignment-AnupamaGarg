const FormManager = require("./placeForm")
const APIObject = require("./dataManager")
const PlaceList = require("./placeList")

document.querySelector("#idPlaceForm").innerHTML = FormManager.renderEntryForm()