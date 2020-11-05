const Api_key = "4037f9cbb2de8c0e3f8afd2e3c178b64";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${Api_key}&language=en-US`,
  fetchNetflixOrginals: `/discover/tv?api_key=${Api_key}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${Api_key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${Api_key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${Api_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${Api_key}&with_genres=27`,
  fetchRomanticMovies: `/discover/movie?api_key=${Api_key}&with_genres=10749`,
  FetchDocumentaries: `/discover/movie?api_key=${Api_key}&with_genres=99`,
};

export default requests;
