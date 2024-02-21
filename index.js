// web 1 Calculator
const disp = document.getElementById('display');

function addToDisplay(input){
    disp.value += input;
}

function ClearDisplay(){
    disp.value = "";

};

function Calculate(){
    disp.value = eval(disp.value);
};

function calculate(){
    try{
        disp.value = eval(disp.value);
    } catch (error){
        disp.value = "Error";
    }
};

