// First, tell us your name
let yourName = "Joey Hoellerich" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
credit.innerText = yourName;

//---------------------------------------------------------------------------------------
// selecting the the button elements for each button 
const gbPlusBtn = document.querySelector('#add-gb') //add gingerbread
const gbMinusBtn = document.querySelector("#minus-gb") //minus gingerbread

const ccPlusBtn = document.querySelector("#add-cc"); //add chocolate chip
const ccMinusBtn = document.querySelector("#minus-cc"); //minus chocolate chip

const sugarPlusBtn = document.querySelector("#add-sugar"); //add sugar
const sugarMinusBtn = document.querySelector("#minus-sugar"); //subtract sugar

// --------------------------------------------------------------------------
//make functions for each button

const total = document.querySelector("#qty-total")

// add 1 to gingerbread in table
let addGb = () => {
    gb++ //add 1 to gb value
    document.querySelector("#qty-gb").innerText = String(gb); //place updated gb value in table next to "gingerbread"
    total.innerText = String(gb + cc + sugar); //add total and place it in the table 
}

// subtract 1 to gingerbread in table
let subGb = () => {
    if(gb > 0){ //check and see that the gb value is larger than 0 (don't want to go below 0)
        gb-- //subtract 1 to gb value
        document.querySelector("#qty-gb").innerText = String(gb); //place updated gb value in table next to "gingerbread"
        total.innerText = String(gb + cc + sugar); //add total and place it in the table 
    }
}

// add 1 to cc in table
let addCc = () => {
    cc++ //add 1 to cc
    document.querySelector("#qty-cc").innerText = String(cc); //place updated cc value in table next to "chocolate chip"
    total.innerText = String(gb + cc + sugar); //add total and place it in the table 
}

// subtract 1 to cc in table
let subCc = () => {
    if(cc > 0){ //check and see that the cc value is larger than 0 (don't want to go below 0)
        cc-- //subtract 1 to cc value
        document.querySelector("#qty-cc").innerText = String(cc); //place updated cc value in table next to "chocolate chip"
        total.innerText = String(gb + cc + sugar); //add total and place it in the table 
    }
}

// add 1 to sugar in table
let addSugar = () => {
    sugar++ //add 1 to sugar
    document.querySelector("#qty-sugar").innerText = String(sugar); //place updated cc value in table next to "chocolate chip"
    total.innerText = String(gb + cc + sugar); //add total and place it in the table 
}

// subtract 1 to cc
let subSugar = () => {
    if(sugar > 0){ //check and see that the cc value is larger than 0 (don't want to go below 0)
        sugar-- //subtract 1 to cc value
        document.querySelector("#qty-sugar").innerText = String(sugar); //place updated cc value in table next to "chocolate chip"
        total.innerText = String(gb + cc + sugar); //add total and place it in the table 
    }
}

//--------------------------------------------------------------------------------
//Add Event Listners to buttons
gbPlusBtn.addEventListener("click", addGb); //when you click the + button under gingerbread, call addGb function
gbMinusBtn.addEventListener("click", subGb); //when you click the - button under gingerbread, call the subGb function
ccPlusBtn.addEventListener("click", addCc) // when you click the + button under chocolate chip, call the addCc function
ccMinusBtn.addEventListener("click", subCc) // when you click the - button under the chocolate chip, call the subCc function
sugarPlusBtn.addEventListener("click", addSugar) // when you click the + button under the sugar cookie, call the addSugar function
sugarMinusBtn.addEventListener("click", subSugar) //when you clikc the - button under the sugar cookie, call the subSugar function

// Code to update name display
credit.textContent = `Created by ${yourName}`




