import Notiflix from 'notiflix';

// сервис требует регистрации

const KEY = '34759376-559a31fb7ee536dcb85212044';
const PIXABAY_URL = 'https://pixabay.com/api/';
export default class PixabayService {
  constructor() {
    this.searchQuery = '';
    this.per_page = 40;
    this.page = 1;
    // this.lang = 'ru';
  }

  fetchImages() {
    const url = `${PIXABAY_URL}?key=${KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=false&lang='en'&per_page=${this.per_page}&page=${this.page}`;

    return fetch(url)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error();
      })
      .then(data => {
        if (data.hits.length > 0) {
          this.incrementPage();
          const totalHits = data.totalHits;
          this.totalHits = totalHits;
          Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
          return data.hits;
        }

        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        return [];
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
