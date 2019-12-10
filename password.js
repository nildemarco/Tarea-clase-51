const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z']


const largoPassword = (password) => {
    if (password.length >= 6) {
        numerosPassword(password)
        return true
    }


}


const numerosPassword = (password) => {
    for (let i = 0; i < password.length; i++) {
        if (numeros.indexOf(password[i]) != -1) {
            letrasPassword(password)
            return true
        }
    }

}

const letrasPassword = (password) => {
    for (let i = 0; i < password.length; i++) {
        if (letras.indexOf(password[i]) != -1) {
            return true

        }
    }

}

const validarPassword = (password) => (largoPassword(password) ===true
    && numerosPassword(password) === true
    && letrasPassword(password) === true)



console.log(validarPassword("Lili12"))


// Segunda manera de resolverlo

let letters = /[A-Za-z]/
let numbers = /\d/
const largoPass = password => (password.length >= 6)

const letterPass = password => (letters.test(password))

const numberPass = password => (numbers.test(password))

const validarPass = password => (largoPass(password) && numberPass(password) && letterPass(password))



 console.log(validarPass("Lili22"))

 