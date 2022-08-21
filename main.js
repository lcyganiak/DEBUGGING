console.log('Jestem consol.logiem')


const arrName = ['Jan', 'Adam']

console.log(arrName)




function pokaz() {
    console.log(arrName)
}
setTimeout(pokaz, 0)

arrName.push('Henryka')


// setTimeOut - opóxnienie działania funkcje 
function alerts() {
    alert(' Jestem alertem')
}


// pierwszy argument funcja bez wywołania sama nazwa, drugi arg to czass w milisekundach
// setTimeout(alerts, 3000)


// zerwanie referencji w consol.log
// debugger zatrzymuje wykonywanie kodu 
// debugger
const club = 'ŁKS'

console.log('Jaki klub mam w zmiennej ' + club)

// consol.error()

const num = 1 
function getPost() {
    // debugger
    if( num > 2) {
        console.log("sukces")
    } else {
        console.error("Podan liczba jest za mała")
    }
}
getPost()


// fetch('jakie URL')
// .then()
// .error(e => {
//     console.error(e)
// })

// console.table 

