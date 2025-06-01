// src/utils/fetchGif.js
export async function getRandomGif() {
  const API_KEY = 'int8G3UFodZvOVn02fS2YRMiXLvw3BgH';

  const suitQueries = ['Fixing suit', 'suit', 'tuxedo'];
  const gayQueries = ['gay porn', 'gay kissing'];
  const allQueries = [...suitQueries, ...gayQueries];

  const chosenQuery = allQueries[Math.floor(Math.random() * allQueries.length)];

  const limit = 25;
  const maxOffset = 100;
  const offset = Math.floor(Math.random() * maxOffset);

  const fallbackGif = 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnp6YmlkYmN2b3o1dTVreGFpN2I4dTd0M3o0dmNxY3EwNTQzczZ1NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LV9gRI7u3hc0YaYh93/giphy.gif';

  try {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(chosenQuery)}&api_key=${API_KEY}&limit=${limit}&offset=${offset}`
    );

    const data = await res.json();

    if (!data?.data?.length) {
      return { gifUrl: fallbackGif, chosenQuery: 'fallback' };
    }

    const gifUrl = data.data[Math.floor(Math.random() * data.data.length)].images.original.url;
    return { gifUrl, chosenQuery };

  } catch (e) {
    // Fallback on error too
    return { gifUrl: fallbackGif, chosenQuery: 'fallback' };
  }
}