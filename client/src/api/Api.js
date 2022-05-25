const axios = require('axios')

/*
  - trending
  - movies
  - tv shows
  - top rated
  - search mechanism

*/

const api = axios.create({
  baseURL: "http://localhost:3001"
})


export default {
    getHomeList: async () => {
      return [
        {
            slug: 'trending',
            title: 'Populares da semana',
            items: await api.get(`/`)
        }
      ]
    }
}