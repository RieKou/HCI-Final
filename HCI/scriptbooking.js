function favorite(heart){
    heart.classList.toggle("fa-regular");
    heart.classList.toggle("fa-solid");
}


const checkbox1 = document.getElementById('term1');
const checkbox2 = document.getElementById('term2');
const button = document.getElementById('submit');
const dateInput1 = document.getElementById('pickup');
const dateInput2 = document.getElementById('return');

function borrowingLimit(){
    const date1 = dateInput1.value;
   
    if (date1){
        dateInput2.disabled = false;

        const max = new Date(date1);
        max.setDate(max.getDate() + 7);

        const maxStr = max.toISOString().split('T')[0];
        dateInput2.max = maxStr;
        dateInput2.min = date1; 
    } else{
        dateInput2.disabled = true;
        dateInput2.value = '';
    }
    validateSubmit();
}

function validateSubmit(){   
    const date1 = dateInput1.value; 
    const date2 = dateInput2.value; 
    const checkboxes = checkbox1.checked && checkbox2.checked;
    const date = date1 && date2 && new Date(date2) <= new Date(dateInput2.max);
    
    button.disabled = !(checkboxes && date);
}

dateInput1.addEventListener('change', borrowingLimit);
dateInput2.addEventListener('change', validateSubmit);
checkbox1.addEventListener('change', validateSubmit);
checkbox2.addEventListener('change', validateSubmit);

validateSubmit();
