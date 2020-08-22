

document.addEventListener('DOMContentLoaded', () => {

    buildForm();
    createListSpace();
    const addToList = document.querySelector('#indexBodyForm');
    addToList.addEventListener('submit', addAListItems);
});

let aForm;

const buildForm = function () {
    console.log("building a form")
    const indexBody = document.querySelector('#formSection');
    const aForm = document.createElement('form');
    aForm.id = 'indexBodyForm';

    const fromWrap = document.createElement('div');
    fromWrap.id = 'wrapperForFormElements'

    const formItem = document.createElement('div');

    const nameFieldLabel = document.createElement('label');
    nameFieldLabel.for = 'name';
    nameFieldLabel.innerHTML = "Name ";
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'enteredName';
    nameInput.required='true'; //!! Seems like this will need to be fillded for submit form to work.

    const submitFrom = document.createElement('input');
    submitFrom.id = "submitForm";
    submitFrom.value = "Add to List";
    submitFrom.type = "submit";

    formItem.appendChild(nameFieldLabel);
    formItem.appendChild(nameInput);


    fromWrap.appendChild(formItem);
    // fromWrap.appendChild(nameFieldLabel);
    // fromWrap.appendChild(nameInput);

    aForm.appendChild(fromWrap);
    aForm.appendChild(submitFrom);
    indexBody.appendChild(aForm);

};

const createListSpace = function () {
    console.log("creating a space to print the list")
    const listAllocator = document.querySelector('#listSection');
    const unorderedList = document.createElement('ul');
    unorderedList.id = "UnorderedList"
    listAllocator.appendChild(unorderedList);
};

const addAListItems = function (event) {
    addNameToList(event)
    // addNameToList(event)
    clearInputOptions()
  
};

const addNameToList = function(event) {
    event.preventDefault();
    console.log("trying to add to list")
    const list = document.querySelector('ul');

    const newListItem = document.createElement("li");
    
    const nameDiv = document.createElement('div');
    nameDiv.id="nameDivInList";
    const nameTitlie = document.createTextNode("Name: ");
    
    const nameTyped = document.createTextNode('h1');
    nameTyped.textContent = event.target.enteredName.value;

    nameDiv.appendChild(nameTitlie);
    nameDiv.appendChild(nameTyped);

    newListItem.appendChild(nameDiv);

    list.appendChild(newListItem);
    
}

const clearInputOptions = function(){
    document.getElementById('enteredName').value = "";
}





