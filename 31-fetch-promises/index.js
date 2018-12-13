fetch('https://dog.ceo/api/breeds/image/random/4')
.then(response => {
  // note, we can call the parameter anything we want.
  // calling it 'response' is a common practice
	return response.json()
  // response.json() returns another promise because parsing JSON takes a while....
})
// once we have the parsed JSON (now as a JS object) we call our render function with it:
.then(renderDogs) // functions are passed by Reference, so we "link" to the function defined below:


// the parsed JSON data get's passed into our function as a parameter.
function renderDogs(dogsData) {
  // I can choose to call this anything. Here I chose `dogsData`
  const dogsArray = dogsData.message // get the array out of the JSON object.
  dogsArray.forEach(url => {
		const img = document.createElement("img")
		img.src = url
    img.alt = "images of dogs"
		document.body.appendChild(img)
	})
}
