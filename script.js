document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse).hide();
        }
    });
});

fetch("https://api.jikan.moe/v4/anime/38671/episodes")
    .then(res => res.json())
    .then(data => {
        const list = document.getElementById("episodeList");

        data.data.forEach(ep => {
            const div = document.createElement("div");
            div.className = "col-lg-4 col-md-6 col-12 mb-4";

            div.innerHTML = `
                <div class="card h-100 shadow-sm border-danger">
                    <a href="https://samehadaku.li/?s=enen" target="_blank" style="text-decoration: none;">
                    <div class="card-body">
                        <h6 class="fw-bold text-danger mb-2 fs-6 fs-md-5">🔥 Episode ${ep.mal_id}</h6>
                        <p class="mb-0 text-muted fs-7 fs-md-6">${ep.title}</p>
                    </div>
                    </a>
                </div>
            `;

            list.appendChild(div);
        });
    });