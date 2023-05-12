import axios from 'axios'

function fetchMovies(){
  axios
  .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
  .then((res)=>{
    console.log(res)
    const h1El = document.querySelector('h1')
    const imgEl = document.querySelector('img')

    h1El.textContent = res.data.Search[0].Title // h1태그 text 
    imgEl.src = res.data.Search[0].Poster // src
    imgEl.alt = 'poster'
  })
}
fetchMovies()