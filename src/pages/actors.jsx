import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Films = () => {
    const [actors,setactors] = useState([]);

    useEffect(() => {
      const fetch = async () => {
        try {
          const response = await axios.get('http://localhost:8081/actors');
          console.log(response)
          setactors(response.data);
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
              {actors.map(actor => (
                
                    <p>{actor.first_name} {actor.last_name}</p>
                  
            
              ))}
            </ul>
          </div>
          </div>
        </div>
        </section>
    );
    }

export default Films;