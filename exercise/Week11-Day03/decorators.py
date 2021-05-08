def toUpperCase(func):
    def inner():
        result = func()
        newResult = result.upper()
        return newResult
    return inner()

@toUpperCase
def name():
    return "sUbHAn"

@toUpperCase
def surname():
    return "ahMeDOv"

print(name)
print(surname)

def countChar(func):
    def inner():
        result = len(func())
        # newResult = len(result)
        return result
    return inner()

@countChar
def nameLen():
    return "Subhan"

@countChar
def surnameLen():
    return "Memmedeliyev"

print(nameLen)

print(surnameLen)