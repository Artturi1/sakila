import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


import axios from 'axios';


const Add = () => {
    const [films,setfilms] = useState([{
            film_id: "",
        }]);
    const handlechange = (e) => {
        setfilms(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:8081/films?id='+films.film_id + '');
            console.log(response)
            setfilms(response.data);
            console.log(films)
            return(
                <section className="home" id="home">
                    <div className="max-width">
                        <div className="home-content">
                            <div className="App">
        
                                <ul>
                                   
                                        
                                            <h2>{films}</h2>
                                           
                                    
                                </ul>
                            </div>  
                        </div>
                    </div>
                </section>

                
            );
            this.forceUpdate();
            
            }
            catch (err) {
            console.log(err);
            }
    }
   console.log(films)
  
    return (
        <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
        <div className="App">
        
          
        

        <div className="form">
        <h1>Search Films</h1>
        <form>
            <input type="text" placeholder=" Film name" onChange={handlechange} name="film_id"/>
            <button onClick={handleClick}>Search</button>
        </form>
        </div>

        </div>
        </div>
      </div>
      </section>

       

    );
    }

export default Add;