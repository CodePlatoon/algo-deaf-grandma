import sys
print("HEY KID!")
goodbye_count=0

while True:
    response = input()

    if response.isupper():
        print("NO, NOT SINCE 1946!")
    elif response == "":
        print("WHAT?!")
    else:
        print("SPEAK UP, KID!")
    
    if response.upper()=="GOODBYE":
        goodbye_count+=1
        if goodbye_count==1:
            print("LEAVING SO SOON?")
            if response.isupper()=="GOODBYE":
                goodbye_count+=1
    if goodbye_count==2:
        print("LATER, SKATER!")
        sys.exit()
