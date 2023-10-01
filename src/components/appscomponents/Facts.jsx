import React from 'react'
import { useState } from 'react'

const Facts = () => {
  const [fact, setFact] = useState(null);

  const getFacts = async (e) => {
    e.preventDefault();
    const inputText = document.getElementById('facts-limit');
    const inputValue = Number(inputText.value);
    const api_key = import.meta.env.VITE_API_KEY;
    let url = `https://api.api-ninjas.com/v1/facts?limit=${inputValue}`;
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': api_key,
        'Content-Type': 'application/json',
      }
    });
    let data = await response.json();
    console.log(data);
    setFact(data);
  }

  return (
    <div id='facts-app'>
      <div id="facts-left" className='bg-orange-100 shadow-lg shadow-fuchsia-300'>
        <form className='border border-3' onSubmit={getFacts}>
          <h3 className='facts-left-design facts-labels'>Limit 👇</h3>
          <select name="facts-limit" id="facts-limit" className='facts-left-design'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
          </select>
          <button id='btn-facts-search' className='facts-left-design'>Go 🧐🔎</button>
        </form>
      </div>
      <div id="facts-right" className='bg-orange-100'>
        {fact &&(
          fact.map((item, index) => (
            <div className='facts-ques-ans-div bg-yellow-100' key={index}>{item.fact}</div>
          ))
        )}
      </div>
    </div>
  )
}

export default Facts