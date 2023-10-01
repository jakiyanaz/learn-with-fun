import React from 'react'
import { useState } from 'react'
import geocoding_img from '../../assets/images/geolocationimg1.jpg'

const Geocoding = () => {
  const [cityDetails, setCityDetails] = useState(null);

  const getGeocoding = async (e) => {
    e.preventDefault();
    const inputText = document.getElementById('form-input');
    const inputValue = inputText.value;
    let api_key = import.meta.env.VITE_API_KEY;
    let url = `https://api.api-ninjas.com/v1/geocoding?city=${inputValue}`;
    let response = await fetch(url, {
      method: 'GET',
      headers: {
          'X-Api-Key': api_key,
          'content-Type': 'application/json',
      }
    });
    let data = await response.json();
    // console.log(data);
    
    setCityDetails(data);
  }

  return (
    <div id='geocoding-app'>
        <div id="geocoding-left" className='geocoding-sec'>
          <img src={geocoding_img} alt="" />
        </div>
        <div id="geocoding-right" className='geocoding-sec'>
            <div id="geocoding-app-wrapper">
                <form onSubmit={getGeocoding}>
                    <input type="text" name='form-input' id='form-input' placeholder='Enter the city name, Ex: aurangabad' />
                    <button id='btn-geocoding-app'>Search🧐</button>
                </form>
                <div id="geocoding-app-result">
                  {cityDetails &&(
                    cityDetails.map((item, index) => (
                      <div className='geocoding-result-render bg-yellow-100' key={index}>
                        {
                          Object.entries(item).map(([key, value], index) => (
                            <div key={index}>
                              <p><strong>{key} : </strong> {value}</p>
                            </div>
                          ))
                        }
                      </div>
                    ))
                  )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Geocoding