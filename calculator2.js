//reference for our display DOM element
let display = document.getElementById(`display`);

//provides references to the buttons
let buttons = Array.from(document.getElementsByClassName(`button`));

let backSpace = 
//Functionality for Each of the Buttons
buttons.map(button => {
    button.addEventListener(`click`, (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = " ";
                break;
            case `=`:
                try{
                    display.innerText = parseInt(eval(display.innerText)); // The part we had to fix
                    // console.log(display.innerText);
                }
                catch{
                    display.innerText = `Error`;
                    break;
                }
                break;
            default:
                if (e.target.id === "backspace") {
                    if (display.innerText) //if there is something inside of the display
                    {
                        display.innerText = parseInt(display.innerText.slice(0, -1));
                        return;   
                    }else{
                        display.innerText = "Error";
                        break;
                    }
                } else {
                    display.innerText += e.target.innerText;
                }
        }
    })

});