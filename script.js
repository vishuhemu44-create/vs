const movies = [
    { name: "The Empire", img: "https://via.placeholder.com/300x200?text=Empire" },
    { name: "Toxic", img: "https://via.placeholder.com/300x200?text=Toxic" },
    { name: "KGF", img: "https://via.placeholder.com/300x200?text=KGF" },
    { name: "Love Dares", img: "https://via.placeholder.com/300x200?text=Love+Dares" },
    { name: "Baahubali 2", img: "https://via.placeholder.com/300x200?text=Baahubali+2" },
    { name: "Beyond Skyline", img: "https://via.placeholder.com/300x200?text=Beyond+Skyline" },
    { name: "Thudarum", img: "https://via.placeholder.com/300x200?text=Thudarum" }
];

function showMovies() {
    const result = document.getElementById("result");
    result.innerHTML = `
        <div class="movie-grid">
            ${movies.map(movie => `
                <div class="movie-card"
                     style="background-image:url('${movie.img}')"
                     onclick="openMovie('${movie.name}')">
                    <span>${movie.name}</span>
                </div>
            `).join("")}
        </div>
    `;
}

function openMovie(name) {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
    document.getElementById("movieTitle").innerText = name;
}

function goBack() {
    document.getElementById("page2").style.display = "none";
    document.getElementById("page1").style.display = "flex";
}