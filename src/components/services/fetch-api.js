const BASE_URL = 'http://localhost:3000';

async function fetchData(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchAuthors() {
  return fetchData(`${BASE_URL}/authors?_embed=books`);
}
export function fetchBooks() {
  return fetchData(`${BASE_URL}/books`);
}

export function fetchBookById(bookId) {
  return fetchData(`${BASE_URL}/books/${bookId}_expand=author`);
}
