

function deafGrandma() {

    let goodbyeCounter = 0
    let input =""
    let response=""
    while (goodbyeCounter <=1){// cont talk to gma 
    input = window.prompt("Respond to grandma:", "Hi, Dear.")
    if (input ===""){response = "WHAT?!"
    } else if(input.toUpperCase()!==input){response="SPEAK UP, KID!"}
    else if (input==="GOODBYE"){goodbyeCounter=goodbyeCounter +1
    if (goodbyeCounter <1){response="LATER, SKATER!"
    }else {response="LEAVING SO SOON?"}
      
    }else{response="NO, NOT SINCE 1946!"}
  
     alert(response) 


}

}

deafGrandma();

// == double equals- compare with coercion  === triple compare without coercion