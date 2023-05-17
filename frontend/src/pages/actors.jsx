import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Outlet, Link } from "react-router-dom";

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
                <div className='data_style'  key={actor.first_name}>
                  
                  <p>{actor.first_name}</p>   
                  
              
                  
                  <p>{actor.last_name}</p>
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