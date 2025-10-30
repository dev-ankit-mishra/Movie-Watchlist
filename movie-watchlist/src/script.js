const MOVIE_KEY=import.meta.env.VITE_MOVIE_KEY;



document.querySelector("#search").addEventListener("click", event => {
    event.preventDefault();
    let movie
    const title=document.querySelector("#title").value;
    fetch(`https://www.omdbapi.com/?apikey=${MOVIE_KEY}&t=${title}`)
        .then(res=>res.json())
        .then(data=>{
            movie=data;
            document.querySelector(".movies-container").innerHTML=`
        <div class="movie">
            <img src="${movie.Poster}" alt="movie-img"/>
            <div class="movie-details">
            <p class="movie-title">
                <span class="movie-heading">${movie.Title}</span>
                <span>&starf; ${movie.Ratings[0].Value}</span>
             </p>
             <p class="movie-info">
                <span>${movie.Runtime}</span>
                <span>${movie.Genre}</span>
                <span>Watchlists</span>
             </p>
            <p class="description">${movie.Plot}</p>
            
          
        </div>
        </div>
        <hr>
        
    `
        })


})

document.querySelector("#watchlist").addEventListener("click", event => {
    window.location.href = "watchlist.html"
})



