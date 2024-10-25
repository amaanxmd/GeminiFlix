export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY
    }
  };

  export const url = 'https://image.tmdb.org/t/p/w200/'
  export const geminikey =process.env.REACT_APP_GEMINI_KEY