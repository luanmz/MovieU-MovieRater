const API_KEY = '7745c2cd007513d18df83f01e36a3027';
const API_BASE = 'https://api.themoviedb.org/3';

/*
  - trending
  - movies
  - tv shows
  - top rated
  - search mechanism

*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}

export default {
    getHomeList: async () => {
      return [
        {
            slug: 'trending',
            title: 'Populares da semana',
            items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
        }
      ]
    }
}