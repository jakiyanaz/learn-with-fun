import React, { useState } from 'react'
import mercury from '../../assets/images/mercury.jpg'
import venus from '../../assets/images/venus.jpg'
import earth from '../../assets/images/earth.jpg'
import mars from '../../assets/images/mars.jpg'
import jupiter from '../../assets/images/jupiter.jpg'
import saturn from '../../assets/images/saturn.jpg'
import uranus from '../../assets/images/uranus.jpg'
import neptune from '../../assets/images/neptune.jpg'
import solarsystem from '../../assets/images/solarsystem.jpg'

const Planets = () => {
  const [planet, setPlanet] = useState({
    planet_name: "",
    planet_mass: "",
    planet_radius: "",
    planet_period: "",
    planet_semi_major_axis: "",
    planet_temperature: "",
    planet_distance_light_year: "",
    planet_host_star_mass: "",
    planet_host_star_temperature: ""
  })
  const [image, setImage] = useState(solarsystem);

  const planetApp = async () => {
    const selectoption = document.getElementById('planet-select');
    const selected_value = selectoption.value;
    let api_key = `${import.meta.env.VITE_API_KEY}`;
    let url = `https://api.api-ninjas.com/v1/planets?name=${selected_value}`;
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': api_key,
        'Content-Type': 'application/json',
      }
    });
    let data = await response.json();
    console.log(data);
    setPlanet({
      planet_name: data[0].name,
      planet_mass: data[0].mass,
      planet_radius: data[0].radius,
      planet_period: data[0].period,
      planet_semi_major_axis: data[0].semi_major_axis,
      planet_temperature: data[0].temperature,
      planet_distance_light_year: data[0].distance_light_year,
      planet_host_star_mass: data[0].host_star_mass,
      planet_host_star_temperature: data[0].host_star_temperature
    })
    
    if (data[0].name === "Mercury") {
      setImage(mercury);
    }
    else if (data[0].name === "Venus") {
      setImage(venus);
    }
    else if (data[0].name === "Earth") {
      setImage(earth);
    }
    else if (data[0].name === "Mars") {
      setImage(mars);
    }
    else if (data[0].name === "Jupiter") {
      setImage(jupiter);
    }
    else if (data[0].name === "Saturn") {
      setImage(saturn);
    }
    else if (data[0].name === "Uranus") {
      setImage(uranus);
    }
    else {
      setImage(neptune);
    }
  }

  const getPlanet = async (event) => {
    event.preventDefault();
    planetApp();
  }

  return (
    <div id="planets-app" className='bg-orange-100'>
      <div id="important-points" className='opacity-90'>
          <h1 style={{textAlign: 'center', fontWeight: 'bolder', fontSize: '30px'}}>⭐IMPORTANT POINTS ⭐</h1><br />
          <p>✅The <b>mass</b> of planets is in <b>Jupiters</b> where <b>1 Jupiter = 1.898 * 1027 kg</b>.</p>
          <p>✅The average <b>radius</b> of planets is in <b>Jupiters</b> where <b>1 Jupiter = 69911 km</b>.</p>
          <p>✅The <b>orbital period</b> of a planet refers to the amount of time it takes for the planet to complete one orbit around its host star. The <b>orbital period</b> is given in <b>earth days</b>. </p>
          <p>✅The <b>semi-major axis</b> is a measure of the size of the planet's orbit.</p>
          <p>✅The <b>semi-major axis</b> is given in <b>Astronomical Units</b> where <b>1 astronomical unit (AU) ≈ 149,597,870.7 kilometers</b>.</p>
          <p>✅The <b>temperature</b> is given in <b>kelvin</b>.</p>
          <p>✅The <b>distance</b> of the planet from earth is given in <b>light years</b> where <b>1 light-year (ly) ≈ 9.461 trillion kilometers (km)</b>.</p>
          <p>✅A <b>host star</b>, in the context of astronomy and planetary science, is a star around which one or more celestial objects, such as planets, moons, or other smaller bodies, orbit.</p>
          <p>✅The <b>mass</b> of <b>host star</b> is given in <b>jupiters</b>.</p>
          <p>✅The <b>temperature</b> of <b>host star</b> is given in <b>kelvin</b>.</p>
      </div>
      <div id="wrapper-planet-app" className='bg-yellow-100 opacity-90'>
        <div id="search-form" className='internal-main-divs'>
          <form onSubmit={getPlanet}>
            <select name="planet-select" id="planet-select">
              <option value="">----Select Planet----</option>
              <option value="mercury">Mercury</option>
              <option value="venus">Venus</option>
              <option value="earth">Earth</option>
              <option value="mars">Mars</option>
              <option value="jupiter">Jupiter</option>
              <option value="saturn">Saturn</option>
              <option value="uranus">Uranus</option>
              <option value="neptune">Neptune</option>
            </select>
            <button id='btn-planets-search'>Search🪐</button>
          </form>
        </div>
        <div id="planets-app-result" className='internal-main-divs'>
          <img src={image}alt="" />
          <p>
            <span className='first-span'>Name : </span>
            <span className='second-span' title='Name'>{planet.planet_name}</span>
          </p>
          <p>
            <span className='first-span'>Mass : </span>
            <span className='second-span' title='Mass in Jupiters'>{planet.planet_mass}</span>
          </p>
          <p>
            <span className='first-span'>Radius : </span>
            <span className='second-span' title='Radius in Jupiters'>{planet.planet_radius}</span>
          </p>
          <p>
            <span className='first-span'>Orbital Period : </span>
            <span className='second-span' title='Orbital Period in Earth Days'>{planet.planet_period}</span>
          </p>
          <p>
            <span className='first-span'>Semi Major Axis : </span>
            <span className='second-span' title='Semi Major Axis in Astronomical Units'>{planet.planet_semi_major_axis}</span>
          </p>
          <p>
            <span className='first-span'>Temperature : </span>
            <span className='second-span' title='Surface Temperature in Kelvin'>{planet.planet_temperature}</span>
          </p>
          <p>
            <span className='first-span'>Distance Light Year : </span>
            <span className='second-span' title='Distance from Earth in Light Years'>{planet.planet_distance_light_year}</span>
          </p>
          <p>
            <span className='first-span'>Host Star Mass : </span>
            <span className='second-span' title='Host Star Mass in Jupiters'>{planet.planet_host_star_mass}</span>
          </p>
          <p>
            <span className='first-span'>Host Star Temperature : </span>
            <span className='second-span' title='Host Star Temperature in Kelvin'>{planet.planet_host_star_temperature}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Planets