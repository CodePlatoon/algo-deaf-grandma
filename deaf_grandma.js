function deafGrandma() {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    console.log("HEY KID!");
    let goodbye_count = 0;
    
    rl.on('line', (response) => {
      if (response === response.toUpperCase()) {
        console.log("NO, NOT SINCE 1946!");
      } else if (response === "") {
        console.log("WHAT?!");
      } else {
        console.log("SPEAK UP, KID!");
      }
    
      if (response.toUpperCase() === "GOODBYE") {
        goodbye_count += 1;
        if (goodbye_count === 1) {
          console.log("LEAVING SO SOON?");
        } else if (goodbye_count === 2) {
          console.log("LATER, SKATER!");
          rl.close();
        }
      }
    });
    

}

deafGrandma();
