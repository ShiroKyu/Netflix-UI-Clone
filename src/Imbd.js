const API_KEY = "15a8dbfc77dbca4cf8cc97fdf9ca6c60";
const API_BASE = "https://api.themoviedb.org/3";

/*
  originais da netflix
  recomendados (trending)
  em alta (top rated)
  ação
  comédia
  terror
  romance
  documentários
*/

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do netflix',
        items: []
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: []
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: []
      },
      {
        slug: 'action',
        title: 'Ação',
        items: []
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: []
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: []
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: []
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: []
      },
    ]
  }
}