import React, { useState } from 'react'

const HistoricalEvents = () => {
  const [searchByText, setSearchByText] = useState("");
  const [searchByYear, setSearchByYear] = useState("");
  const [searchByMonth, setSearchByMonth] = useState("");
  const [searchByDay, setSearchByDay] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleFocus = (inputNumber) => {
    if (inputNumber !== 1) {
      setSearchByYear('');
      setSearchByMonth('');
      setSearchByDay('');
    }
    if (inputNumber !== 2) {
      setSearchByText('');
      setSearchByMonth('');
      setSearchByDay('');
    }
    if (inputNumber !== 3) {
      setSearchByText('');
      setSearchByYear('');
      setSearchByDay('');
    }
    if (inputNumber !== 4) {
      setSearchByText('');
      setSearchByYear('');
      setSearchByMonth('');
    }
  }

  let api_key = import.meta.env.VITE_API_KEY;

  const handleSearch = async (e) => {
    e.preventDefault();
    let url = 'https://api.api-ninjas.com/v1/historicalevents?';
    if (searchByText) {
      url += `text=${searchByText}`
    }
    if (searchByYear) {
      url += `year=${searchByYear}`
    }
    if (searchByMonth) {
      url += `month=${searchByMonth}`
    }
    if (searchByDay) {
      url += `day=${searchByDay}`
    }

    try {
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': api_key,
          'Content-Type': 'application/json',
        }
      });

      if(response.ok) {
        let data = await response.json();
        if (data.length !== 0) {
          // console.log(data)
          setSearchResult(data);
        }
        else {
          alert("No data related to this");
        }
      } else {
        console.log("Some Error Occured");
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  return (
    <div id='historicalEvents-app'>
      <div id="historicalEvents-app-wrapper">
        <div id="historicalEvents-imp-points">
          <h1 style={{textAlign: 'center', fontWeight: 'bolder', fontSize: '30px'}}>⭐IMPORTANT POINTS⭐</h1>
          <p>✅<b>Year</b> with two or three digits is <b>year</b> in <b>AD(Anno Domini)</b>.</p>
          <p>✅<b>Year</b> with two or three digits and negative sign is <b>year</b> in <b>BC(Before Christ)</b>.</p>
          <p>✅<b>Month</b> is given in numbers, <b>for example:</b> 1 = January, 12 = December</p>
        </div>
        <div id="historicalEvents-app-forms-div">
          <form id='form-search-by-text' className='historicalEvents-app-forms' onSubmit={handleSearch}>
            <input type="text" name="search-by-text" id="search-by-text" title='Ex: world war II' placeholder='Search by text Ex: world war II' value={searchByText} onClick={() => handleFocus(1)} onChange={(e) => setSearchByText(e.target.value)} />
            <button id='btn-search-by-text'>Search</button>
          </form>
          <form id='form-search-by-year' className='historicalEvents-app-forms' onSubmit={handleSearch}>
            <input type="text" name="search-by-year" id="search-by-year" title='Ex: 1982' placeholder='Search by year, Ex: 1982' value={searchByYear} onClick={() => handleFocus(2)} onChange={(e) => setSearchByYear(e.target.value)} />
            <button id='btn-search-by-year'>Search</button>
          </form>
          <form id='form-search-by-month' className='historicalEvents-app-forms' onSubmit={handleSearch}>
            <input type="text" name="search-by-month" id="search-by-month" title='Ex: 4' placeholder='Search by month, Ex: 4' value={searchByMonth} onClick={() => handleFocus(3)} onChange={(e) => setSearchByMonth(e.target.value)} />
            <button id='btn-search-by-month'>Search</button>
          </form>
          <form id='form-search-by-day' className='historicalEvents-app-forms' onSubmit={handleSearch}>
            <input type="text" name="search-by-day" id="search-by-day" title='Ex: 3' placeholder='Search by day, Ex: 3' value={searchByDay} onClick={() => handleFocus(4)} onChange={(e) => setSearchByDay(e.target.value)} />
            <button id='btn-search-by-day'>Search</button>
          </form>
        </div>
        <div id="historicalEvents-app-result">
          {searchResult && (
            searchResult.map((item, index) => (
              <ul className='historicalEvents-result-ul' key={index}>
                <li><b>Day : </b>{item.day}</li>
                <li><b>Month : </b>{item.month}</li>
                <li><b>Year : </b>{item.year}</li>
                <li><b>Event : </b>{item.event}</li>
              </ul>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default HistoricalEvents