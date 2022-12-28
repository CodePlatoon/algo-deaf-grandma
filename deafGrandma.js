function deafGrandma() {
    alert('HEY KID!!')
    let byeGranny = 0
    let gmaResponse = ""
    let talkToGma = ""

    while (byeGranny <= 1) {
        let talkToGma = prompt('Respond to Grandma:')
        if (talkToGma === "") {
            gmaResponse = "WHAT?!"
        } else if (talkToGma !== talkToGma.toUpperCase()) {
            gmaResponse = "SPEAK UP, KID!!"
        } else if (talkToGma === "GOODBYE!") {
            byeGranny++
            if (byeGranny > 1) {
                gmaResponse = "LATER, SKATER!"
                break;
            } else {
                gmaResponse = "LEAVING SO SOON?"
            }
        } else {
            gmaResponse = "NO, NOT SINCE 1946!"
        }

        alert(gmaResponse)
    }

}

deafGrandma();


// Premise
// Write a program which can imitate a Grandma who's hard of hearing and follows
// these constraints:

// * If you don't input anything (just hit enter) she responds with `WHAT?!`
// * If you ask a question with any lower-case letters, she responds with
// `SPEAK UP, KID!`
// * If you talk to her in all upper-case letters, she responds with
// `NO, NOT SINCE 1946!`

// * The first time you say `GOODBYE!` she says `LEAVING SO SOON?`
// * The second time you say `GOODBYE!` she says `LATER, SKATER!` and the program
// exits.