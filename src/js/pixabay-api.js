import { inputUser } from '../main';

export function getImage() {
  return fetch(
    `https://pixabay.com/api/?key=43028681-4db453fe74ec5ab2aaa5007ef&q=${inputUser}&image_type=photo&per_page=15&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => data.hits);
}
