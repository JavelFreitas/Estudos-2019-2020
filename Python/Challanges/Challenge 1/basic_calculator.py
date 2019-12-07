#The next line is the begining of what we call an function
def menu():
    print("\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
    print("We have the following options available:")
    print("0 - Quit calculator")
    print("1 - Sum 2 numbers")
    print("2 - Decrease 2 numbers")
    print("3 - Divide 2 numbers")
    print("4 - Multiply 2 numbers")
    print("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n")
    pass

# The five following are called lambda functions
sum = lambda a, b: a+b

decrease = lambda c, d: c-d

divide = lambda e, f: e/f

multiply = lambda g, h: g*h

escolha = lambda : (float(input("Type the first number\n")),float(input("Type the second number\n")))

option = 1

print("Welcome to a simple calculator!\n")

while option != 0:
    
    menu()

    try:
        option = input("\nChoose one of the options above\n")
    
        if option == 0:
            print("Quitting... .. .\n")
            break
        if option == 1:
            a, b = escolha()
            print(sum(a,b))
        elif option == 2:
            a, b = escolha()
            print(decrease(a,b))
        elif option == 3:
            a, b = escolha()
            print(divide(a,b))
        elif option == 4:
            a, b = escolha()
            print(multiply(a,b))
        else:
            raise Exception("~~Option not available~~\n")
            pass
        pass
    except Exception as exception:
        print(exception)
        pass

    