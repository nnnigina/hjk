// спросить имя и возраст  если первая буква имени равно "а" и возраст больше 18-ти то впускается если нет. то нет

let yo = prompt('What is your name?').toUpperCase().trim()
let ao = prompt('Hoe old are you?')
if(yo[0] === 'A' && age >= 18) {
    alert('Welcome')
} else {
    alert('Bye :)')
}

// спросить имя и если количество букв в имени будет четным то впускаем. если нет то нет


let fw = prompt('What is your name?').length.trim()
if(fw % 2 === 0) {
    alert('welcome') } else {
        alert('bye')
    }



// а промпте пишу любое исло программа должна сказать четное оно или нет.


let numberA = prompt("Напиши число и я скажу тебе четное оно или нет").trim()

if(numberA % 2 === 0) {
    alert('Это число четное.')
} else {
    alert('Это число не четное.')
}
// создать калькултор