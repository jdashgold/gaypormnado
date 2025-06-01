// src/utils/fetchGif.js
export async function getRandomGif() {
  const API_KEY = 'int8G3UFodZvOVn02fS2YRMiXLvw3BgH';

  const suitQueries = ['Fixing suit', 'suit', 'tuxedo'];
  const gayQueries = ['gay porn', 'gay kissing'];
  const allQueries = [...suitQueries, ...gayQueries];

  const chosenQuery = allQueries[Math.floor(Math.random() * allQueries.length)];
  const limit = 25;

  const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(chosenQuery)}&api_key=${API_KEY}&limit=${limit}`);
  const data = await res.json();

  const gifUrl = data.data.length
    ? data.data[Math.floor(Math.random() * data.data.length)].images.original.url
    : 'https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif';

  return { gifUrl, chosenQuery };
}
