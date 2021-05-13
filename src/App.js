import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import './App.css'

import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';


export default () => {

  const [movieList, setMovieList] = useState([]);
  const [FeaturedData, setFeaturedData] = useState(null);
  const [blackHeader, setblackHeader] = useState(false);


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

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10)
        setblackHeader(true);
      else 
        setblackHeader(false);
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page">

      <Header black={blackHeader}/>

      {FeaturedData && 
        <FeaturedMovie item={FeaturedData} />
      }

      <section className="lists">
        { movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        )) }
      </section>

      <footer>
        Feito com <span role="img" aria-label="Coração">❤</span><br />
        Direitos de imagem à Netflix
      </footer>

      {movieList.length <= 0 &&
      <div className="loading">
        <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="loading"></img>
      </div>
    }
    </div>
  )
}