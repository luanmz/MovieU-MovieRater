const axios = require('axios')

export const api = axios.create({
  baseURL: "http://localhost:3001"
})

export default {
    getHomeList: async () => {
      return [
        {
            slug: 'trending',
            title: 'Filmes e Séries',
            items: await api.get(`/`)
        }
      ]
    },

    getMovieById: (id) => {
      return api.get(`/${id}`)
    },
    
    setRate: (id, nota) => {
        
      return api.post(`/movieavaliacao/${id}`, {
          avaliacao: nota
      })

      
  }
}