// const button = document.querySelector('button')
// const body = document.querySelector('body')

// const rand_colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
// button.addEventListener('click', changeHex);
// const value = document.querySelector('#hex_code')

// function changeHex() {
//     let hex = '#'

//     for (let i = 0; i < 6; i++) {
//         const val = Math.floor(Math.random() * rand_colors.length)
//         hex += rand_colors[val]
//     }

//     value.textContent = hex
//     body.style.backgroundColor = hex


// }

const button = document.querySelector('button')
const body = document.querySelector('body')

const value = document.querySelector('#hex_code')

const rand_values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']


const hexChange = () => {
    let hex = '#'
    for (let i = 0; i < 6; i++) {
        const num = Math.floor(Math.random() * rand_values.length)
        hex += rand_values[num];
    }
    value.textContent = hex
    body.style.backgroundColor = hex
}

button.addEventListener('click', hexChange)