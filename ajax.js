



 function get() {
    const data = fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())

    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 1);
      });
}

function literacja(parametr) {
    parametr.forEach(element => {
        console.log(element)
    });
}

async function wraper() {
    const data =  await get()
    console.log(data)
    literacja(data)
    return data
}


const xd = wraper()

console.log(xd)