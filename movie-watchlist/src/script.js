const MOVIE_KEY=import.meta.env.VITE_MOVIE_KEY;



document.querySelector("#search").addEventListener("click", event => {
    event.preventDefault();
    let movie
    const title=document.querySelector("#title").value;
    fetch(`http://www.omdbapi.com/?apikey=${MOVIE_KEY}&t=${title}`)
        .then(res=>res.json())
        .then(data=>{
            movie=data;
            document.querySelector(".movies-container").innerHTML=`
        <img src="${movie.Poster}" alt="movie-img"/>
        <div class="movie-details">
            <p class="movie-title">
                <span>${movie.Title}</span>
                <span>&starf; ${movie.Ratings[0].Value}</span>
             </p>
             <p class="movie-info">
                <span>${movie.Runtime}</span>
                <span>${movie.Genre}</span>
                <span>watchList</span>
             </p>
            <p>${movie.Plot}</p>
        </div>
    `
        })


})



