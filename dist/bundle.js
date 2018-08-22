(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
const FormManager = require("./placeForm")
const APIObject = require("./dataManager")
const PlaceList = require("./placeList")

document.querySelector("#idPlaceForm").innerHTML = FormManager.renderEntryForm()
},{"./dataManager":1,"./placeForm":4,"./placeList":5}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
const entryComponent = require("./place")

const listElement = document.querySelector(".PlaceList")

const placeList = (places) => {
    listElement.innerHTML = ""

    places.map(entry => {
        listElement.innerHTML += entryComponent(entry)
    })
}

module.exports = placeList
},{"./place":3}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RhdGFNYW5hZ2VyLmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIiwiLi4vc2NyaXB0cy9wbGFjZS5qcyIsIi4uL3NjcmlwdHMvcGxhY2VGb3JtLmpzIiwiLi4vc2NyaXB0cy9wbGFjZUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgQVBJT2JqZWN0ID0ge31cclxuXHJcbkFQSU9iamVjdC5zYXZlUGxhY2VzID0gKHVzZXJzKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvcGxhY2VzXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJzKVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbn1cclxuXHJcbkFQSU9iamVjdC5nZXRQbGFjZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvcGxhY2VzXCIpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG59XHJcbkFQSU9iamVjdC5kZWxldGVQbGFjZXMgPSAoaWQpID0+IHtcclxuICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4L3BsYWNlcy8ke2lkfWAsIHtcclxuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCJcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IEFQSU9iamVjdCIsImNvbnN0IEZvcm1NYW5hZ2VyID0gcmVxdWlyZShcIi4vcGxhY2VGb3JtXCIpXHJcbmNvbnN0IEFQSU9iamVjdCA9IHJlcXVpcmUoXCIuL2RhdGFNYW5hZ2VyXCIpXHJcbmNvbnN0IFBsYWNlTGlzdCA9IHJlcXVpcmUoXCIuL3BsYWNlTGlzdFwiKVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpZFBsYWNlRm9ybVwiKS5pbm5lckhUTUwgPSBGb3JtTWFuYWdlci5yZW5kZXJFbnRyeUZvcm0oKSIsImNvbnN0IGVudHJ5Q29tcG9uZW50ID0gKGl0ZW0pID0+IHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVudHJ5XCI+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJlbnRyeV9faGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+JHtpdGVtLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiZW50cnlfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICR7aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJlbnRyeV9fZGVsZXRlXCIgaWQ9XCJkZWxldGUtLSR7aXRlbS5pZH1cIj5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBlbnRyeUNvbXBvbmVudCIsImNvbnN0IEZvcm1NYW5hZ2VyID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XHJcbiAgICBjbGVhckZvcm06IHtcclxuICAgICAgICB2YWx1ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYWNlc1Zpc2l0ZWRcIikudmFsdWUgPSBcIlwiXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjTG9jYXRpb25cIikudmFsdWUgPSBcIlwiXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWJvdXRQbGFjZVwiKS52YWx1ZSA9IFwiXCJcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWFnZXNcIikudmFsdWUgPSBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbmRlckVudHJ5Rm9ybToge1xyXG4gICAgICAgIHZhbHVlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3M9XCJwbGFjZXNJVmlzaXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwbGFjZXNWaXNpdGVkXCI+UGxhY2VzIFZpc2l0ZWQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwidGV4dFwiIGlkPVwicGxhY2VzVmlzaXRlZFwiIHBsYWNlaG9sZGVyPVwiUGxhY2VzIFZpc2l0ZWRcIj5cclxuICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3M9XCJjaXR5JmNvdW50cnlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiTG9jYXRpb25cIj5Mb2NhdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJMb2NhdGlvblwiIHBsYWNlaG9sZGVyPVwiTG9jYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3M9XCJBYm91dFBsYWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFib3V0UGxhY2VcIj5BYm91dCBQbGFjZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiYWJvdXRQbGFjZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYWJvdXRQbGFjZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCIxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzPVwiSW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW1hZ2VcIj5JbWFnZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vcGxhY2Vob2xkLml0LzI1MC8wLjgmdGV4dD1JbnNlcnQtSW1hZ2UgaWQ9XCJpbWFnZXNcIiA+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNhdmVQbGFjZUJ1dHRvblwiPlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0pXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGb3JtTWFuYWdlciIsImNvbnN0IGVudHJ5Q29tcG9uZW50ID0gcmVxdWlyZShcIi4vcGxhY2VcIilcclxuXHJcbmNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5QbGFjZUxpc3RcIilcclxuXHJcbmNvbnN0IHBsYWNlTGlzdCA9IChwbGFjZXMpID0+IHtcclxuICAgIGxpc3RFbGVtZW50LmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgICBwbGFjZXMubWFwKGVudHJ5ID0+IHtcclxuICAgICAgICBsaXN0RWxlbWVudC5pbm5lckhUTUwgKz0gZW50cnlDb21wb25lbnQoZW50cnkpXHJcbiAgICB9KVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHBsYWNlTGlzdCJdfQ==
