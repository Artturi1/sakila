import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Films = () => {
    const [films,setfilms] = useState([]);

    useEffect(() => {
      const fetch = async () => {
        try {
          const response = await axios.get('http://localhost:8081/films');
          console.log(response)
          setfilms(response.data);
        }
        catch (err) {
          console.log(err);
        }
      };
  
      fetch();
    }, []);
  
  
    return (
      <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
        <div className="App">
        
        <ul>
            {films.map(film => (
              <div className='data_style'  key={film.title}>
                <h2> {film.title}</h2>
                <p>{film.description}</p>
              </div>
            ))}
          </ul>
        </div>
        </div>
      </div>
      </section>
      
        
  
    );
    }

export default Films;