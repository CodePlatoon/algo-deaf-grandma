//requires promt-sync module
//download with  npm install promt-sync

function deafGrandma() {
    function isLowerCase(str) { 
      return (str=== str.toUpperCase());
      }

    const prompt = require("prompt-sync")();
    let input = prompt("HEY KID! ");
    let byeCounter = 0;

    while(byeCounter < 3){
      if (byeCounter == 1 && input === "GOODBYE!"){
        console.log("LATER, SKATER! ");
        break
      } else if (input === ""){
        input = prompt("WHAT! ");
        byeCounter = 0;
      } else if(isLowerCase(input) === false) {  
        input = prompt("SPEAK UP, KID! ");
        byeCounter = 0;
      } else if(input === "GOODBYE!"){
        input = prompt("LEAVING SO SOON? ")
        byeCounter++;
      } else if(isLowerCase(input) === true) { 
        input = prompt("NO, NOT SINCE 1946! ");
        byeCounter = 0;
      } 
    }
}

deafGrandma();
