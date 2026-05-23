const API_KEY = 'c3c539ca3bd243f5939861bf749e43e7';
const id = new URLSearchParams(window.location.search).get('id');

fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    .then(r => r.json())
    .then(jogo => {
        document.getElementById('nome').textContent = jogo.name;
        document.getElementById('descricao').textContent = jogo.description_raw;
        document.getElementById('capa').src = jogo.background_image;
        document.getElementById('avaliacao').textContent = `Avaliação: ${jogo.rating}/5`;
        document.getElementById('generos').textContent = jogo.genres?.map(g => g.name).join(', ');
    });
