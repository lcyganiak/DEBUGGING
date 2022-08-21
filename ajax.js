



 function get() {
    const data = fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())

    return data
}

function literacja(parametr) {
    parametr.forEach(element => {
        console.log(element)
    });
    return parametr
}
async function wraper() {
    const data = await get()
  literacja(data)
}




const e =literacja(await get())
console.log(e)