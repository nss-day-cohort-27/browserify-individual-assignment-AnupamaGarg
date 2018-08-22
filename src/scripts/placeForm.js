const FormManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#placesVisited").value = ""
            document.querySelector("#Location").value = ""
            document.querySelector("#aboutPlace").value = ""
            document.querySelector("#images").value = ""
        }
    },
    renderEntryForm: {
        value: () => {
            return `
                <fieldset class="placesIVisited">
                    <label for="placesVisited">Places Visited</label>
                    <input required type="text" id="placesVisited" placeholder="Places Visited">
                </fieldset>
                <fieldset class="city&country">
                    <label for="Location">Location</label>
                    <input required type="text" id="Location" placeholder="Location">
                </fieldset>
                <fieldset class="AboutPlace">
                    <label for="aboutPlace">About Place</label>
                    <textarea id="aboutPlace"
                              placeholder="aboutPlace"
                              rows="10"
                    >
                    </textarea>
                </fieldset>
                <fieldset class="Image">
                    <label for="image">Images</label>
                   <img src="http://placehold.it/250/0.8&text=Insert-Image id="images" >
                </fieldset>
                <button id="savePlaceButton">Save</button>
            `
        }
    }

})


module.exports = FormManager