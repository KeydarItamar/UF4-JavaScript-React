// Claus
const keys = {
    api_key: '4ac83cdfba7863080caf9eefa0b600b4',
    session_id: 'fdc5d5b12f2b140ce596d68d4ea71bc74ecad68b',
    account_id: '26bb99bda081561886724b28077cf40518c34f4a'
}
let loader = document.getElementById('loading')
let moviesResult = document.getElementById("moviesResult");
var current_page = 1;
var total_pages = 0;
var queryValue;

async function setFav(id, favBool){
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWM4M2NkZmJhNzg2MzA4MGNhZjllZWZhMGI2MDBiNCIsInN1YiI6IjY2MWZmYmRhN2FlY2M2MDE3YzZkMmNmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L91_DAg_IiZOw-ymP5VnZM3Q7MBhB6veoyKVhR1FNa0'
        },
        body: JSON.stringify({media_type: 'movie', media_id: id, favorite: favBool})
      };
      
     await fetch('https://api.themoviedb.org/3/account/21219424/favorite?session_id=fdc5d5b12f2b140ce596d68d4ea71bc74ecad68b', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
        console.log (`id marked as ${favBool}`)
    
    showFavs();
}


async function showFavs(limpieza){
     moviesResult.innerHTML="";
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWM4M2NkZmJhNzg2MzA4MGNhZjllZWZhMGI2MDBiNCIsInN1YiI6IjY2MWZmYmRhN2FlY2M2MDE3YzZkMmNmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L91_DAg_IiZOw-ymP5VnZM3Q7MBhB6veoyKVhR1FNa0'
        }
    };
      
   await fetch('https://api.themoviedb.org/3/account/21219424/favorite/movies?language=en-US&page=1&session_id=fdc5d5b12f2b140ce596d68d4ea71bc74ecad68b&sort_by=created_at.asc', options)
        .then(response => response.json())
        .then(response => {
            response.results.forEach(movie => printMovie(movie, true, false)); 

            console.log(response);
        })
        .catch(err => console.error(err));   
}


async function searchMovies(query, limpieza){
    if(limpieza){
        moviesResult.innerHTML="";  
    }
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWM4M2NkZmJhNzg2MzA4MGNhZjllZWZhMGI2MDBiNCIsInN1YiI6IjY2MWZmYmRhN2FlY2M2MDE3YzZkMmNmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L91_DAg_IiZOw-ymP5VnZM3Q7MBhB6veoyKVhR1FNa0'
        }
      };
    
    await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${current_page}`, options)
     .then(response => response.json())
     .then(response => {
         response.results.forEach(movie => printMovie(movie, false, false)); 
         total_pages = response.total_pages
         console.log(response);
     })
     .catch(err => console.error(err));   

    loader.style.display = "none";
    clearInput();
    removeActive();
}



/* FUNCIONS D'INTERACCIÓ AMB EL DOM */

// Click Favorites
document.getElementById("showFavs").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");

    showFavs();
})

// Click Watchlist
document.getElementById("showWatch").addEventListener("click", function(){
    removeActive();
    this.classList.add("active");

    //showWatch();
})



/* Funcions per detectar la cerca d'una pel·lícula */
// Intro a l'input
document.getElementById("search").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchMovies(this.value, true);
        queryValue = this.value
    }
});

// Click a la lupa
document.querySelector(".searchBar i").addEventListener("click", ()=>searchMovies(document.getElementById("search").value));

// Netejar l'input
document.getElementById("search").addEventListener('click', ()=>clearInput()); 

function clearInput(){
    document.getElementById("search").value="";
}

// Elimina l'atribut active del menú
function removeActive(){
    document.querySelectorAll(".menu li a").forEach(el=>el.classList.remove("active"));
}

/* Funció per printar les pel·lícules */
function printMovie(movie, fav, watch){
    let favIcon = fav ? 'iconActive' : 'iconNoActive';
    let watchIcon = watch ? 'iconActive' : 'iconNoActive';
    console.log(fav)
    moviesResult.innerHTML += `<div class="movie">
                                    <img src="https://image.tmdb.org/t/p/original${movie.poster_path}">
                                    <h3>${movie.original_title}</h3>
                                    <div class="buttons">
                                        <a id="fav" onClick="setFav(${movie.id}, ${!fav})"><i class="fa-solid fa-heart ${favIcon}"></i></a>
                                        <a id="watch" onClick="setWatch(${movie.id}, ${!watch})"><i class="fa-solid fa-eye ${watchIcon}"></i></a>
                                    </div>`;
}



window.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight,clientHeight} =
    document.documentElement;
    console.log('scroll')
    if (scrollTop + clientHeight >= scrollHeight - 5 &&
    current_page<total_pages) {
        loader.style.display = "block";
        console.log('supererrrr')
        current_page++
        searchMovies(queryValue, false)
    }
    });

