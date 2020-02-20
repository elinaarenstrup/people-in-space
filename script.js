//Select the container
const container = document.getElementById('astros')

//Fetch from the API
fetch('http://api.open-notify.org/astros.json')

//Get Json from API
  .then((response) => {
    return response.json()
  })

  //With Json, start to create HTML inside of the container
  .then((json) => {
    container.innerHTML = `<h1>There are ${json.number} people in space right now.</h1>`

    //Used forEach to iterate through the people array to execute the function for each person. += Add on.
    json.people.forEach((person) => {
    container.innerHTML += `<p>${person.name} is on the ${person.craft}</p>`
    })
  })