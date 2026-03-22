let list = []

document.addEventListener('DOMContentLoaded', async e => {
    // try {
    //     const data = await fetch('http://localhost:8000/all')
    //     list = await data.json()
    //     console.log(list)
    // } catch (err) {
    //     console.log(err)
    // }
    const list = [
        {text: 'Потрогати траву', type: 0, id: 0},
        {text: 'Писати код', type: 1, id: 1},
        {text: 'Зійти з розуму', type: 2, id: 2}
    ]
    const columns = document.querySelectorAll('.column-content')
list.forEach(el => {
    columns[el.type].insertAdjacentHTML('beforeend', `<div class="card" id="${el.id}"><p>${el.text}</p></div>`)
});
document.querySelectorAll('.card').forEach(el => el.addEventListener('click', magic))

const buttons = document.querySelectorAll('button')
const inputs = document.querySelectorAll('input')
for(let i = 0; i < 3; i++) {
    buttons[i].addEventListener('click', async e => {
        e.preventDefault()
        const value = inputs[0].value
        if (value.trim() !== "") {
            let el = {text: value, type: Number.parseInt(inputs[i].classList[0]), id: list.at(-1).id+1}
            try {
                // const response = await fetch('http://localhost:8000/create', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json' 
                //     },
                //     body: JSON.stringify(el)
                // })
                // el = await response.json()
                list.push(el)
                columns[el.type].insertAdjacentHTML('beforeend', `<div class="card" id="${el.id}"><p>${el.text}</p></div>`)
                console.log(document.getElementById(el.id))
                document.getElementById(el.id).addEventListener('click', magic)
            } catch(err) {console.log(err)}
        }
    })
}
function magic(e) {
    const obj = list.find(l => l.id == e.currentTarget.id)
    console.log(obj)
    if (obj.type === 1 || obj.type === 0) {
        obj.type+=1
        columns[obj.type].insertAdjacentHTML('beforeend', `<div class="card" id="${obj.id}"><p>${obj.text}</p></div>`)
        e.currentTarget.remove()
        document.getElementById(obj.id).addEventListener('click', magic)
    } else if (obj.type === 2) e.currentTarget.classList.add('marked')
}
})
