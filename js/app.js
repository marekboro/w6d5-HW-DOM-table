

document.addEventListener('DOMContentLoaded', () => {

    buildForm();
    createListSpace();
    createControlSpace();
    const addToList = document.querySelector('#indexBodyForm');
    addToList.addEventListener('submit', addAListItems);
    
    const erase = document.getElementById(`clearList1`);
    erase.addEventListener('click', clearlistMethod1);

    const undo = document.getElementById(`undoLast`);
    undo.addEventListener('click', removeLastListItem);

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
    const formItemFood = document.createElement('div');

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

    //! Fav FOOD
    const foodFieldLabel = document.createElement('label');
    foodFieldLabel.for = 'favouritefood';
    foodFieldLabel.innerHTML = "Favourite Dish: ";
    const foodInput = document.createElement('input');
    foodInput.type = 'text';
    foodInput.id = 'enteredFood';
    foodInput.required = 'true'; 
    formItemFood.appendChild(foodFieldLabel);
    formItemFood.appendChild(foodInput);
    
    // //! SUBMIT FORM
    const submitFrom = document.createElement('input');
    submitFrom.id = "submitForm";
    submitFrom.value = "Add to List";
    submitFrom.type = "submit";





    fromWrap.appendChild(formItemName);
    fromWrap.appendChild(formItemEmail);
    fromWrap.appendChild(formItemFood);


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
    ClarListButton1.innerHTML = "Erase List";
    controlAllocator.appendChild(ClarListButton1);
    
    const undoButton = document.createElement('button');
    undoButton.id = "undoLast";
    undoButton.innerHTML = "Undo";
    controlAllocator.appendChild(undoButton);




    const DemoButton = document.createElement('button');
    DemoButton.id = "demoButton";
    DemoButton.innerHTML = "Demo";
    controlAllocator.appendChild(DemoButton);


};
let counter = 0;
const addAListItems = function (event) {
    addNameToList(event);
    addEmailToList(event);
    addFavouriteFood(event);
    clearInputOptions();
    counter += 1;


};

const addNameToList = function (event) {
    event.preventDefault(); // ! PREVENTS page refreshing on executing event.
    console.log("trying to add naem fields to list") //* TO REMOVE
    const list = document.querySelector('ul');

    const newListItem = document.createElement("li");
    newListItem.id = `listItem${counter}`;
    const nameDiv = document.createElement('div');
    const nameTitle = document.createTextNode("Name: ");

    const nameTyped = document.createTextNode('h1');
    nameTyped.textContent = event.target.enteredName.value;

    nameDiv.appendChild(nameTitle);
    nameDiv.appendChild(nameTyped);

    newListItem.appendChild(nameDiv);

    list.appendChild(newListItem);
}

const addEmailToList = function (event) {  // !! WORKS
    // console.log("trying to add email fields to list")   //* TO REMOVE

    const currentListElement = document.getElementById(`listItem${counter}`);
    const divForEmail = document.createElement('div');
    const emailTitle = document.createTextNode("Email: ");
    const emailTyped = document.createTextNode('h1');
    emailTyped.textContent = event.target.enteredEmail.value;

    divForEmail.appendChild(emailTitle);
    divForEmail.appendChild(emailTyped);
    currentListElement.appendChild(divForEmail);

}

const addFavouriteFood = function (event) {  // !! WORKS

    const currentListElement = document.getElementById(`listItem${counter}`);
    const divForFood = document.createElement('div');
    const FoodTitle = document.createTextNode("Favourite Dish: ");
    const FoodTyped = document.createTextNode('h1');
    FoodTyped.textContent = event.target.enteredFood.value;

    divForFood.appendChild(FoodTitle);
    divForFood.appendChild(FoodTyped);
    currentListElement.appendChild(divForFood);

}


const clearInputOptions = function () {
    document.getElementById('enteredName').value = "";
    document.getElementById('enteredEmail').value = "";
    document.getElementById('enteredFood').value = "";
}



const clearlistMethod1 = function() {
    console.log("ups")
    const list = document.querySelector('#UnorderedList');
    list.innerHTML = "";  /// NEW

};


const removeLastListItem = function() {
    console.log("t1");
    
    var itemToRemove = document.getElementById(`listItem${counter-1}`);
    itemToRemove.parentNode.removeChild(itemToRemove);
    console.log("t2");
    // itemToRemove.innerHTML = "";
    console.log("t3");
    counter-=1;
    console.log("t4");

};

