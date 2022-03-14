def deaf_grandma():
    goodbye = False
    print("")
    print("*************************")
    print("Deaf Grandma: HEY KID!\n")
    speak = input("Say Something: ")

    if speak.upper() == speak:
        if speak == "GOODBYE!":
            print("")
            print("Deaf Grandma: LEAVING SO SOON?\n")
            speak = input("Say Something: ")
            if speak == "GOODBYE!":
                print("")
                print("Deaf Grandma: LATER, SKATER!\n")
                goodbye = True
    if goodbye == True:
        print("*** END OF PROGRAM ***")
    else:
        if speak == "":
            print("")
            print("Deaf Grandma: WHAT!?\n")
            deaf_grandma()
        elif speak.upper() == speak:
            print("")
            print("Deaf Grandma: NO, NOT SINCE 1946\n")
            deaf_grandma()
        elif (speak.upper() != speak):
            print("")
            print("Deaf Grandma: SPEAK UP, KID!\n")
            deaf_grandma()

deaf_grandma()