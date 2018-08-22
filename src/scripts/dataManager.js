const APIObject = {}

APIObject.savePlaces = (users) => {
    return fetch("http://localhost:8088/places", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(users)
    })
        .then(response => response.json())
}

APIObject.getPlaces = () => {
    return fetch("http://localhost:8088/places")
        .then(response => response.json())
}
APIObject.deletePlaces = (id) => {
    return fetch(`http://localhost:8088/places/${id}`, {
        method: "DELETE"
    })
        .then(r => r.json())
}
module.exports = APIObject