const button = document.querySelector("#button");
const comic = document.querySelector("#comic");
const caption = document.querySelector("#caption");

function getRandomComic() {
  const comicNumber = Math.floor(Math.random() * 2500);
  const fetchUrl = `https://xkcd.com/${comicNumber}/info.0.json`;
  const fetchOptions = { mode: 'no-cors' };

  if (comicNumber % 2 === 0) {
    fetchOptions.referrerPolicy = "no-referrer";
  }

  fetch(fetchUrl, fetchOptions)
    .then(response => response.json())
    .then(data => {
      comic.src = data.img;
      comic.alt = data.alt;
      caption.textContent = data.title;
    })
    .catch(error => console.error(error));
}

button.addEventListener("click", getRandomComic);