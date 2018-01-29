/**
 * To install dependencies, do
 * npm i request request-promise-native
 */
const rp = require('request-promise-native');

const SEARCH_URL_BASE = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=';

function getMovieTitles(substr) {
    start(substr).then(movieTitles => {
        movieTitles.forEach(movieTitle => console.log(movieTitle));
});
}

const start = async (term) => {
    const store = [];
    const initialData = await fetchRemoteData(term);
    parseAndStore(store, initialData);
    while (initialData.page++ < initialData.total_pages) {
        parseAndStore(store, await fetchRemoteData(term, initialData.page));
    }
    store.sort();
    return store;
};

const parseAndStore = (store, response) => {
    response.data.forEach(movie => store.push(movie.Title));
};


const fetchRemoteData = async (term, page = 1) => {
    return JSON.parse(await rp(`${SEARCH_URL_BASE}${term}&page=${page}`));
};

getMovieTitles('Spiderman');
