const button = document.querySelector("#button");
const comic = document.querySelector("#comic");
const caption = document.querySelector("#caption");

async function getRandomComic() {
  const comicNumber = Math.floor(Math.random() * 1000);
  const fetchUrl = `https://xkcd.vercel.app/?comic=${comicNumber}`;

  const fetchOptions = {
    mode: 'cors',
  };
  
  if (comicNumber % 2 === 0) {
    fetchOptions.referrerPolicy = "no-referrer";
  }

  try {
    
    const response = await fetch(fetchUrl, fetchOptions);
    const string = await response.text();
    const data = string === "" ? {} : JSON.parse(string);

    comic.src = data.img;
    comic.alt = data.alt;
    caption.textContent = data.title;
  } 
  catch (error) {
    console.error(error);
  }
}

button.addEventListener("click", getRandomComic);