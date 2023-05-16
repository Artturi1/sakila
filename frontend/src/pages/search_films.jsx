import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


import axios from 'axios';


const Films = () => {
    const [films,setfilms] = useState([{
            title: "",
        }]);
    const handlechange = (e) => {
        setfilms(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:8081/films/?title='+films.title);
            console.log(response)
            setfilms(response.data);
            return(
                <section className="home" id="home">
                    <div className="max-width">
                        <div className="home-content">
                            <div className="App">
        
                                <ul>
                                    {films.map(film => (
                                        <div key={film.title}>
                                            <h2>{film.title}</h2>
                                            <p>{film.description}</p>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                
            )
            
            }
            catch (err) {
            console.log(err);
            }
    }
   console.log(films)
  
    return (
        <div className="form">
        <h1>Search Films</h1>
        <form>
            <input type="text" placeholder=" Film name" onChange={handlechange} name="title"/>
            <button onClick={handleClick}>Search</button>
        </form>
        </div>


       

    );
    }

export default Films;