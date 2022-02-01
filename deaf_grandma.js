function deafGrandma() {
  const prompt = require("prompt-sync")();
  let input = prompt("HEY KID! ");
  let goodbyeC = 0
  while (goodbyeC < 1) {
    if (input === 'GOODBYE' || input === 'goodbye' || input === 'Goodbye!' || input === 'Goodbye' || input === 'GOODBYE!' || input === 'goodbye!'){let count = 1
    input = prompt('LEAVING SO SOON?')
    }
    if (count = 1 && input === 'GOODBYE' || input === 'goodbye' || input === 'Goodbye!' || input === 'Goodbye' || input === 'GOODBYE!' || input === 'goodbye!'){
      console.log('LATER, SKATER!')
      break
    } else if (input === '') {
      input = prompt('WHAT!')
    } else if (input == input.toLowerCase()) {
      input = prompt('SPEAK UP, KID!')
    } else if (input == input.toUpperCase()) {
      input = prompt('NO, NOT SINCE 1946!')
    }
  }
}

deafGrandma();