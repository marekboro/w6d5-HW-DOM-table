

document.addEventListener('DOMContentLoaded', () => {
   
    populateSection();
    
  
});

// let aForm;

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