const state = {
    dogs: [],
    selectedDog: {}
};
const components = {
    editForm : null
};
const dogsUri = 'http://localhost:3000/dogs';

document.addEventListener('DOMContentLoaded', () => {
    components.editForm = document.querySelector('#dog-form');
    components.editForm.addEventListener('submit', submitForm);
    getDogs()
    .then(data => {
        state.dogs = data;
        renderDogs()
    })
})

const submitForm = (e) => {
    e.preventDefault();
    
    const [nameInput, breedInput, sexInput] = e.target.querySelectorAll('input[name]');

    const data = {
        name: nameInput.value,
        breed: breedInput.value,
        sex: sexInput.value
    }

    const dogUri = dogsUri + `/${state.selectedDog.id}`

    fetch(dogUri, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => updateDogs(Object.assign(data, {id: state.selectedDog.id})) );
}

const updateDogs = (changedDog) => {
    const dogIndex = state.dogs.findIndex(dog => dog.id === changedDog.id);
    state.dogs[dogIndex] = changedDog;
    const [nameInput, breedInput, sexInput] = components.editForm.querySelectorAll('input[name]');
    nameInput.value = '';
    breedInput.value = '';
    sexInput.value = '';
    renderDogs();
}

const renderDogs = () => {
    const tableBody = document.querySelector('#table-body');
    tableBody.innerHTML = ``;

    state.dogs.forEach((dog) => {
        const tableRow = tableBody.insertRow();
        const nameCell = tableRow.insertCell(0);
        const breedCell = tableRow.insertCell(1);
        const sexCell = tableRow.insertCell(2);
        const editDogCell = tableRow.insertCell(3);

        const editDogButton = document.createElement('button');
        editDogButton.innerText = "Edit";
        editDogButton.dataset.dogId = dog.id;
        editDogButton.addEventListener('click', editDog)

        nameCell.innerText = dog.name;
        breedCell.innerText = dog.breed;
        sexCell.innerText = dog.sex;
        editDogCell.appendChild(editDogButton);
    })
}

const editDog = (event) => {
    const dogId = event.target.dataset.dogId;
    state.selectedDog = state.dogs.find(dog => dog.id === parseInt(dogId));
    
    const [nameInput, breedInput, sexInput] = components.editForm.querySelectorAll('input[name]');

    nameInput.value = state.selectedDog.name;
    breedInput.value = state.selectedDog.breed;
    sexInput.value = state.selectedDog.sex;
}

const getDogs = () => {
    return fetch(dogsUri, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
}