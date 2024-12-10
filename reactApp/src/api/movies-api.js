export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=888e12cfb4490c09a3b4808222545767&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };