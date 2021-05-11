import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import './App.css'

import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';


export default () => {

  const [movieList, setMovieList] = useState([]);
  const [FeaturedData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista total
      const list = await Tmdb.getHomeList(); 
      setMovieList(list);

      // Pegando o featured
      const originals = list.filter(e => e.slug === 'originals');
      const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      const chosen = originals[0].items.results[randomChosen];
      
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  return (
    <div className="page">

      {FeaturedData && 
        <FeaturedMovie item={FeaturedData} />
      }

      <section className="lists">
        { movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        )) }
      </section>
    </div>
  )
}