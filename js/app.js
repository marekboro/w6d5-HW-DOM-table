

document.addEventListener('DOMContentLoaded', () => {
   
   // populateSection();
   buildForm();
   createListSpace();
});

let aForm;

const buildForm = function() {
    console.log("building a form")
    const indexBody = document.querySelector('#formSection');
    const aForm = document.createElement('form');
    aForm.id='indexBodyForm';

    const fromWrap=document.createElement('div');
    fromWrap.id='wrapperForFormElements'

    const takeName = document.createElement('label');
    takeName.for='name';
    takeName.innerHTML="Name "
    const nameInput = document.createElement('input');
    nameInput.type='text';
    nameInput.id='enteredName';
    nameInput.required='true'; //!! Seems like this will need to be fillded for submit form to work.
    // <label for="title" class="primary">Title</label>
    //       <input type="text" id="title" required/>
    fromWrap.appendChild(takeName);
    fromWrap.appendChild(nameInput);
    aForm.appendChild(fromWrap);
    indexBody.appendChild(aForm);
    
};

const createListSpace = function() {
    console.log("creating a space to print the list")
    const listAllocator = document.querySelector('#listSection');
    const unorderedList =  document.createElement('ul');
    unorderedList.id="UnorderedList"
    listAllocator.appendChild(unorderedList);
};

const addAListItem = function(event) {
    console.log("trying to add to list")
};



const populateSection = function() {
    console.log("populate");
    const section = document.querySelector('section');
    const aForm = document.createElement("p");
    // aForm.innerHTML =  "";
    // aForm.id = "theForm"
    
    const para1 = document.createElement("h3");
    para1.textContent ="Testing 1";
    
    const para2 = document.createElement("h4");
    para2.textContent ="Testing 2";
    
    const para3 = document.createElement("h5");
    para3.textContent ="Testing 3"; 

    aForm.appendChild(para1);
    aForm.appendChild(para2);
    aForm.appendChild(para3);
    section.appendChild(aForm);


};


// const populateForm(document.onload,() => {
//     aForm = document.createElement('form');
//     // aForm.innerHTML =  "";
//     aForm.id = "theForm"
    
//     para1 = document.createElement('h3');
//     para1.innerHTML ="Testing 1";
    
//     para2 = document.createElement('h4');
//     para2.innerHTML ="Testing 2";
    
//     para3 = document.createElement('h5');
//     para3.innerHTML ="Testing 3"; 

//     aForm.appendChild(para1);
//     aForm.appendChild(para2);
//     aForm.appendChild(para3);
// });