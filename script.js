// produto.html
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

fetch('https://cors-proxy.igdb.com/v4/games', {
  method: 'POST',
  headers: { 'Client-ID': CLIENT_ID, 'Authorization': `Bearer ${ACCESS_TOKEN}` },
  body: `fields name, summary, cover.url, rating, genres.name, screenshots.url; where id = ${id};`
})
.then(r => r.json())
.then(data => {
  const jogo = data[0];
  // renderiza os detalhes do jogo
});