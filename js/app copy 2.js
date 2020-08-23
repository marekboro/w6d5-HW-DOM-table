

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
    foodFieldLabel.innerHTML = "Favourite Food: ";
    const foodInput = document.createElement('input');
    foodInput.type = 'text';
    foodInput.id = 'enteredFood';
    foodInput.required = 'true';
    formItemFood.appendChild(foodFieldLabel);
    formItemFood.appendChild(foodInput);

    // //! SUBMIT FORM BUTTON
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

const createControlSpace = function () { // !! CONTROL SPACE BUTTON CREATION

    const controlAllocator = document.querySelector('#controlSection');

    const ClearListButton1 = document.createElement('button');
    ClearListButton1.id = "clearList1";
    ClearListButton1.innerHTML = "Erase All";
    controlAllocator.appendChild(ClearListButton1);

    const undoButton = document.createElement('button');
    undoButton.id = "undoLast";
    undoButton.innerHTML = "Erase last";
    controlAllocator.appendChild(undoButton);

    const DemoButton = document.createElement('button');
    DemoButton.id = "demoButton";
    DemoButton.innerHTML = "Demo";
    controlAllocator.appendChild(DemoButton);
};
let counter = 0;




const addAListItems = function (event) {
    addNameToList(event,name);
    addEmailToList(event);
    addFavouriteFood(event);
    clearInputOptions();
    counter += 1;

};

const addNameToList = function (event,name) {
    event.preventDefault(); // ! PREVENTS page refreshing on executing event.
    console.log("trying to add naem fields to list") //* TO REMOVE
    const list = document.querySelector('ul');

    const newListItem = document.createElement("li");
    newListItem.id = `listItem${counter}`;
    const nameDiv = document.createElement('div');
    const nameTitle = document.createTextNode("Name: ");

    const nameTyped = document.createTextNode('h1');
    if (name === ""){
        nameTyped.textContent = event.target.enteredName.value;}
    else {
        nameTyped.textContent = name;
    };

    nameDiv.appendChild(nameTitle);
    nameDiv.appendChild(nameTyped);

    newListItem.appendChild(nameDiv);

    list.appendChild(newListItem);
}

const addEmailToList = function (event,email) {  // !! WORKS
    // console.log("trying to add email fields to list")   //* TO REMOVE

    const currentListElement = document.getElementById(`listItem${counter}`);
    const divForEmail = document.createElement('div');
    const emailTitle = document.createTextNode("Email: ");
    const emailTyped = document.createTextNode('h1');
    if(email === ""){
    emailTyped.textContent = event.target.enteredEmail.value;}
    else {
        emailTyped.textContent = email;
    };


    divForEmail.appendChild(emailTitle);
    divForEmail.appendChild(emailTyped);
    currentListElement.appendChild(divForEmail);

}

const addFavouriteFood = function (event,food) {  // !! WORKS

    const currentListElement = document.getElementById(`listItem${counter}`);
    const divForFood = document.createElement('div');
    const FoodTitle = document.createTextNode("Favourite Food: ");
    const FoodTyped = document.createTextNode('h1');
    
    if (food === ""){
    FoodTyped.textContent = event.target.enteredFood.value; }
    else {
        FoodTyped.textContent = food;
    }

    divForFood.appendChild(FoodTitle);
    divForFood.appendChild(FoodTyped);
    currentListElement.appendChild(divForFood);

}


const clearInputOptions = function () {
    document.getElementById('enteredName').value = "";
    document.getElementById('enteredEmail').value = "";
    document.getElementById('enteredFood').value = "";
}



const clearlistMethod1 = function () {
    console.log("ups")
    const list = document.querySelector('#UnorderedList');
    list.innerHTML = "";  /// NEW

};


const removeLastListItem = function () {
    console.log("t1");

    var itemToRemove = document.getElementById(`listItem${counter - 1}`);
    itemToRemove.parentNode.removeChild(itemToRemove);
    console.log("t2");
    // itemToRemove.innerHTML = "";
    console.log("t3");
    counter -= 1;
    console.log("t4");

};

// const generateEmail = function (name, dish, number,domain) {
//     return `${dish}${name}${number}@${domain}.com`
// };


var listObject = {
    name: "",
    email: "",
    food: ""
};

const demo = function () {
    const nameList = ["Marek", "Duncan", "Ben", "Tim", "Jonny", "Lucy", "Vishal", "Callum", "Ally", "Jennifer", "Jarrod", "Katie"];
    
    const usedNames = [];

    const foodList = ["Pizza", "Ramen", "Haggis", "Fish", "Spaghetti", "Burger", "Curry", "Sandwich", "Salad", "Chilli", "Ribs", "Pinaple", "Watermelon", "Cheddar", "Pie", "Sushi", "Wine", "Beer", "Whskey", "Gin", "Cider"]
    const usedFood =[];

    const number = Math.floor(Math.random()*100);
    
    const domains = ["googlies","yeeehaaw","coldmail","owl","mnms"];

    const usedDomains = [];

    randNameIndex =  Math.floor(Math.random()*nameList.length);
    chosenName = nameList[randNameIndex];
    usedNames.append(nameList.splice(randNameIndex,1))

    // randFoodIndex = Math.floor(Math.random()*foodList.length());
    // chosenFood=foodList[randFoodIndex];
    // usedFood.append(foodList.splice(randFoodIndex,1));

    // randDomainIndex = Math.floor(Math.random()*domains.length());
    // chosenDomain = domains[randDomainIndex];
    // usedDomains.append(domains.splice(randDomainIndex,1));

    // theEmail = generateEmail(chosenName,chosenFood,number,chosenDomain)

//     addNameToList(event,name);
//     addEmailToList(event,);
//     addFavouriteFood(event,);
//     clearInputOptions();
// }
