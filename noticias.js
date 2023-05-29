// Carga las noticias usando la API NewsAPI
//const apiKey = 'c0494664883747f0800467e766054176';
//fetch(`https://newsapi.org/v2/top-headlines?country=es&apiKey=${apiKey}`).then(response => response.json()).then(data => {


var requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

fetch("https://newsapi.org/v2/top-headlines?sources=google-news-ar&apiKey=c0494664883747f0800467e766054176", requestOptions)
.then(response => response.json())
.then(data => {
    const listaNoticias = document.getElementById('lista-noticias');
    const noticias = data.articles;
    console.log(data.articles)
    noticias.forEach(noticia => {
      const listItem = document.createElement('li');
      const enlace = document.createElement('a');
      var imagen = document.createElement('img');
      enlace.href = noticia.url;
      enlace.textContent = noticia.title;
      imagen.src = noticia.urlToImage;
      imagen.href = noticia.url

      if (imagen.src = "null"){ imagen.src ="/imagenes/nodisponible.jpg"; console.log(imagen.src)};
      enlace.appendChild(imagen);
      listItem.appendChild(enlace);
      listaNoticias.appendChild(listItem);
    });
})
.catch(error => {
  console.log('Error al cargar las noticias:', error);
});
