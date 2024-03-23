import { gallery, lightbox } from '../main';

export function renderPhotos(images) {                        
  const markup = images                          
    .map(image => {
      console.log(image);
      return `<li class="gallery-item">
          <a class="gallery-link" href="${image.largeImageURL}">
            <img
               class="gallery-image"
               src="${image.webformatURL}"
               data-source="${image.largeImageURL}"
               alt="${image.tags}"
            />
          </a>
          <ul class="gallery-description">
            <li><h3>Likes</h3><p>${image.likes}</p></li>
            <li><h3>Views</h3><p>${image.views}</p></li>
            <li><h3>Comments</h3><p>${image.comments}</p></li>
            <li><h3>Downloads</h3><p>${image.downloads}</p></li>
          </ul>
        </li>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

