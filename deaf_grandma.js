function deaf_grandma(){
  var goodbye = false;
   console.log("");
   console.log("*************************");
   console.log("Deaf Grandma: HEY KID!\n");
   var speak = prompt("Say Something: ");

   if (speak.toUpperCase() == speak) {
     if (speak == "GOODBYE!") {
       console.log("");
       console.log("Deaf Grandma: LEAVING SO SOON?\n");
       speak = prompt("Say Something: ");
       if (speak == "GOODBYE!") {
         console.log("");
         console.log("Deaf Grandma: LATER, SKATER!\n");
         goodbye = true;
       }
     }
   }
   if (goodbye == true) {
     console.log("*** END OF PROGRAM ***");
   } else {
       if (speak == "") {
           console.log("");
           console.log("Deaf Grandma: WHAT!?\n");
           deaf_grandma();
       } else if (speak.toUpperCase() == speak) {
         console.log("");
         console.log("Deaf Grandma: NO, NOT SINCE 1946\n");
         deaf_grandma();
       } else if (speak.toUpperCase() != speak) {
         console.log("");
         console.log("Deaf Grandma: SPEAK UP, KID!\n");
         deaf_grandma();
       }
   }
}
deaf_grandma();