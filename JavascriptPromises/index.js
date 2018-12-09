// #region Setup
const API_URL = "https://starwars.egghead.training/";

const output = document.getElementById("output")
const spinner = document.getElementById('spinner')

function getFilmTitles(films) {
    return films
         .sort((a, b) => a.episode_id - b.episode_id)
         .map(film => `${film.episode_id}. ${film.title}`)
         .join('\n');

} 

// #endregion

fetch(API_URL + 'films')
    .then(response => {
        if(!response.ok) {
        return Promise.reject( //creates a promise that is rejected for a given reason
            new Error('Unsuccessful response')
        );
    }
    return response.json()
    .then(films => {
        output.innerText = getFilmTitles(films)         
        })
    }) 
    .catch(err => {
        console.log(err)
        output.innerText = 'Can not fetch movies'
    })
    .finally(() => {
        spinner.remove()
    })

// #region promise constructor

function sleep(ms) {
    return new Promise(resolve => {
        throw new Error('...')
        setTimeout(resolve, ms)
    })
}

console.log('right away')

sleep(1000)
    .then(() => {
        console.log('after 1s')
    })
    .then(() => sleep(1000))
    .then(() => {
        console.log('after 2s')
    })
    .catch(() => {
        console.log('Rejected')
    })

// #endregion

// #region convert a callback-based JS function into a promise-based one

const fs = require('fs')
const util = requrie('util')

const readFile = util.promisift(fs.readFile)

// function readFile(path, encoding) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, encoding, (error, contents) => {
//             if(error) {
//                 console.log(error)
//             } else {
//                 console.log(contents)
//             }
//         })
//     })
// }

readFile(__filename, 'utf8')
    .then(contents => {
        console.log(contents)
    },
    error => {
        console.log(error)
    })



// #endregion
