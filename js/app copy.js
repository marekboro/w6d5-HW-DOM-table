

document.addEventListener('DOMContentLoaded', () => {

    buildForm();
    createListSpace();
    createControlSpace();
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

    const formItemName = document.createElement('div');
    const formItemEmail = document.createElement('div');
    
    // //! N A M E Field/request
    const nameFieldLabel = document.createElement('label');
    nameFieldLabel.for = 'name';
    nameFieldLabel.innerHTML = "Name ";
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'enteredName';
    nameInput.required = 'true'; //!! Seems like this will need to be fillded for submit form to work.
    formItemName.appendChild(nameFieldLabel);
    formItemName.appendChild(nameInput);
    
    //! EMAIL Field/request
    const emailFieldLabel = document.createElement('label');
    emailFieldLabel.for = 'email';
    emailFieldLabel.innerHTML = "Email ";
    const emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.id = 'enteredEmail';
    emailInput.required = 'true'; //!! Seems like this will need to be fillded for submit form to work.
    formItemEmail.appendChild(emailFieldLabel);
    formItemEmail.appendChild(emailInput);




    // //! SUBMIT FORM
    const submitFrom = document.createElement('input');
    submitFrom.id = "submitForm";
    submitFrom.value = "Add to List";
    submitFrom.type = "submit";
    
    
   


    fromWrap.appendChild(formItemName);
    fromWrap.appendChild(formItemEmail);


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

const createControlSpace = function () {
    console.log("creating Control Space");
    const controlAllocator = document.querySelector('#controlSection');

    const ClarListButton1 = document.createElement('button');
    ClarListButton1.id = "clearList1";
    ClarListButton1.innerHTML = "Erase1";
    controlAllocator.appendChild(ClarListButton1);

    const ClarListButton2 = document.createElement('button');
    ClarListButton2.id = "clearList2";
    ClarListButton2.innerHTML = "Erase2";
    controlAllocator.appendChild(ClarListButton2);

    const ClarListButton3 = document.createElement('button');
    ClarListButton3.id = "clearList3";
    ClarListButton3.innerHTML = "Erase3";
    controlAllocator.appendChild(ClarListButton3);

    const DemoButton = document.createElement('button');
    DemoButton.id = "demoButton";
    DemoButton.innerHTML = "Demo";
    controlAllocator.appendChild(DemoButton);


};
let counter = 0;
const addAListItems = function (event) {
    addNameToList(event)
    addEmailToList(event)
    clearInputOptions()
    counter+=1;


};

const addNameToList = function (event) {
    event.preventDefault(); // ! PREVENTS page refreshing on executing event.
    console.log("trying to add naem fields to list") //* TO REMOVE
    const list = document.querySelector('ul');

    const newListItem = document.createElement("li");

    const nameDiv = document.createElement('div');
    nameDiv.id = `listDiv${counter}`;
    const nameTitle = document.createTextNode("Name: ");

    const nameTyped = document.createTextNode('h1');
    nameTyped.textContent = event.target.enteredName.value;

    nameDiv.appendChild(nameTitle);
    nameDiv.appendChild(nameTyped);

    newListItem.appendChild(nameDiv);

    list.appendChild(newListItem);
}

const addEmailToList = function(event) {
    console.log("trying to add email fields to list")   //* TO REMOVE
    
    
    
    const list = document.querySelector('ul');
    const newListItem = document.createElement("li");
    const emailDiv = document.createElement('div');
    emailDiv.id = "emailDivInList";
    const emailTitle = document.createTextNode("Email: ");
    const emailTyped = document.createTextNode('h1');
    emailTyped.textContent = event.target.enteredEmail.value;

    emailDiv.appendChild(emailTitle);
    emailDiv.appendChild(emailTyped);

    newListItem.appendChild(emailDiv);

    list.appendChild(newListItem);

}



const clearInputOptions = function () {
    document.getElementById('enteredName').value = "";
    document.getElementById('enteredEmail').value = "";
}





