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
    .then(response => response.json())
    .then(films => {
        output.innerText = getFilmTitles(films)         
    })
    .catch(err => {
        console.log(err)
        output.innerText = 'Can not fetch movies'
    })
    .finally(() => {
        spinner.remove()
    })

