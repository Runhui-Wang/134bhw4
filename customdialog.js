const alertBtn = document.getElementById('alert');
const confirmBtn = document.getElementById('confirm');
const promptBtn = document.getElementById('prompt');
const output = document.querySelector('output');
const alertDialog = document.getElementById('alertDialog');
const confirmDialog = document.getElementById('confirmDialog');
const promptDialog = document.getElementById('promptDialog');

alertBtn.addEventListener('click', () => {
        output.innerHTML = "";

        alertDialog.showModal();

})
confirmBtn.addEventListener('click', () => {
   
        output.innerHTML = "";

        confirmDialog.showModal();
  

})
promptBtn.addEventListener('click', () => {
    if (typeof alertDialog.showModal === "function"){
        const output = document.querySelector('output');
        output.innerHTML = "";

        promptDialog.showModal();
    }
    else{
        alert("this browser does not support <dialog>")
    }
})

function alertchange(dialog){

    dialog.addEventListener('close', () => {
        const output = document.querySelector('output');
        output.innerHTML = "You clicked an alert!!!";
        
    })

}
function confirmchange(dialog){

    dialog.addEventListener('close', () => {
        const answer = dialog.returnValue;
        if(answer == "1"){
            output.innerHTML = "The value returned by the confirm method is : True";
            
        }
        else{
            output.innerHTML = "The value returned by the confirm method is : False";

        }
        
    })

}

function promptchange(dialog){

    dialog.addEventListener('close', () => {
        const text = document.querySelector('input')
        let feedback = promptDialog.returnValue
        let clean = "a";
        

        if(feedback == "clprompt"){
            output.innerHTML = "User didn't enter anything";
            
        }
        else{
            clean = DOMPurify.sanitize(text.value);
            output.innerHTML = `The value returned by the prompt method is : ${clean}`;

        }
    })

}

alertchange(alertDialog);
confirmchange(confirmDialog);
promptchange(promptDialog);