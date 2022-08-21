const all = document


console.log(all)




const jobsTitles = [
    {
        id: 1,
        name: 'QA'
    },
    {
        id: 2,
        name: "Dev"
    },
    {
        id: 3,
        name: "SM"
    }
]

// pobierania warości z input 
function getValueInput() {
    const input = document.querySelector('input').value.trim()
    return input
}


// spawdzanie czy wartośc input jest w is tablicy objektów jobtitles, funkcja zwraca name 

function check(value) {
    // rozwiązanie forEach
    let wartoscZawodu = ''

    jobsTitles.forEach(el => {
        if(el.id == value) {
            wartoscZawodu = el.name
        } 
        // obsługa zdarzenia gdy nie mamy odpowiedzniej liczy z input - sposób 1
        // else {
        //     wartoscZawodu = "podałes liczy większe od3 lub mniejsze od 0"
        // }
    })

    // filter 
const filtrowanie = jobsTitles.filter(item => item.id == value)
// console.log('filtrowanie', filtrowanie[0].name)

// find
const filtrowanie2 = jobsTitles.find(item => item.id == value)
// console.log('find', filtrowanie2.name)




    return wartoscZawodu
}
// dodanie do span wartości wybranej z tablicy jobtitles na podstawie wpisanego inputa

function addToSpan(parametr) {
    const span = document.querySelector('.zawod')
    // obsługa zdarzenia gdy nie mamy odpowiedzniej liczy z input - sposób 2 (odkomentuj linie ponieżej i zakomentuj linie z  span.innerText = parametr)
   // span.innerText = parametr === '' ? "Podałeś złe liczby, zakres to 1 do 3" : parametr
   span.innerText = parametr
}








// funkcja podpięta do przycisku, jej zadanie odpalić funkje pobierania z input, funkcję sprawdzania jaki zawód na podstawie tablicy jobtitles oraz 3 funkcję dodającą zawód do span o class zawod.

function wrraper() {
  const inputValue =   getValueInput()
  const zawod = check(inputValue)
  const sprawdzaniaZawodu = zawod === '' ? "Podałeś złe liczby, zakres to 1 do 3" : zawod
  addToSpan(sprawdzaniaZawodu)
}

const btn = document.getElementById('btn')

btn.addEventListener('click', wrraper )



const cars = [
    {
        name: "Audi",
        cost: 1000
    },
    {
        name: "BMW",
        cost: 1500
    },
    {
        name: "Opel",
        cost: 500
    },
    {
        name: "Fiat",
        cost: 400
    }
] 


function createdSelect() {
   const div = document.querySelector('#selectDiv')
   const newSelect = document.createElement('select')
   cars.forEach(el => {
    const option = document.createElement('option')
    option.innerText = el.name
    option.setAttribute('value', el.name)
    newSelect.appendChild(option)
   })
   div.appendChild(newSelect)

}

createdSelect()

// pobieranie select 
function getSelectVal() {
    const car = document.querySelector('select').value
    console.log( "wew. funkcji ",car)
    const cenaZAuto = porownanie(car)
    console.log(cenaZAuto)

}
// console.log( "zew. funkcji ",car)  tu bedzie błąd
const select = document.querySelector('select')
select.addEventListener('change', getSelectVal)


function porownanie(parametr) {
    const cena = cars.find(item => item.name === parametr).cost
    return cena
}


// dodawanie

function add(a, b) {
    const wynik =  a + b
    console.log(wynik)
    return wynik
}

const dodawanie1 = add(2, 5)

console.log(dodawanie1)
// pobierz z Input wartości i je pomnóż 

function getElement(paramentr) {
    return document.querySelector(paramentr)
}
function mnozenie(a , b) {
    //
    return a *b

}
function wrraper2() {
    const input1 = getElement('#inp1').value
    const input2 = getElement('#inp2').value
    const wynikMnożenie = mnozenie(input1, input2)
    
    console.log(wynikMnożenie)

}

const btn2 = getElement('#mnozenie')
btn2.addEventListener('click', wrraper2)


function addToParagraf(parametr) {
    const paragraf = getElement('#paragrafTwoWay')
    paragraf.innerText = parametr
}

function wraper3() {
    const input = getElement('#twoWay').value
    addToParagraf(input)
}

const inputHandler =  getElement('#twoWay')

inputHandler.addEventListener('change', wraper3)

function change() {
    const paragraf = getElement('#text')
    
    const newStyle = `
    font-size:25px;
       background-color: yellow;
    color:red;`
    console.log(newStyle)
    // paragraf.style = newStyle
    zminaCss(paragraf, newStyle)
}

function zminaCss(html, css) {
    html.style = css
}

getElement('#color-btn').addEventListener('click', change)

const inputColor = getElement('#input-color')

function changeColor() {
    const inputColor = getElement('#input-color').value
    console.log(inputColor) 
    const paragraf = getElement('#paragraf-color')
    // const style =   `color: ${inputColor}`
    paragraf.style.color = inputColor
}

inputColor.addEventListener('change', changeColor)