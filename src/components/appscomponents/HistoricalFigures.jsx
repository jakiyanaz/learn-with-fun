import React, { useState } from 'react'

const HistoricalFigures = () => {
  const [information, setInformation] = useState(null);

  const getHistoricalFigure = async (e) => {
    e.preventDefault();
    const formInput = document.getElementById('historical-figures-input');
    let inputValue = formInput.value;
    let api_key = import.meta.env.VITE_API_KEY;
    let url = `https://api.api-ninjas.com/v1/historicalfigures?name=${inputValue}`
    let response = await fetch(url, {
      method: 'GET',
        headers: {
          'X-Api-Key': api_key,
          'Content-Type': 'application/json',
        }
    });

    /*
    let data = await response.json();
    console.log(data);

    const flattenedData = data.map(({ info, ...rest }) => ({
      ...rest,
      ...info
    }));

    // console.log(flattenedData);

    setInformation(flattenedData);
    */

    if(response.ok) {
        let data = await response.json();
        if (data.length !== 0) {
          const flattenedData = data.map(({ info, ...rest }) => ({
            ...rest,
            ...info
          }));

          // console.log(flattenedData);

          setInformation(flattenedData);
        }
        else {
          alert("No data related to this");
        }
      } else {
        console.log("Some Error Occured");
      }
  }

  return (
    <div id='historical-figures-app'>
      <div id="historical-figures-app-div1" className='historical-figure-app-div'>
        <h3 style={{textAlign: 'center', fontWeight: 'bold', fontSize: '25px', color: 'white'}}>Name (name or title of historical figure / Famous figure)👇</h3>
        <form id='historical-figures-app-form' onSubmit={getHistoricalFigure}>
          <input type="text" name='historical-figures-input' id='historical-figures-input' placeholder='Ex: Indira Gandhi' />
          <button id='btn-historical-figures-app'>Search</button>
        </form>
      </div>
      <div id="historical-figures-app-result" className='historical-figure-app-div'>
        {information &&(
          information.map((item, index) => (
            <div className='historical-figure-result-div' key={index}>
              {
                Object.entries(item).map(([key, value], index) => (
                  <div key={index}>
                    {Array.isArray(value) ? (
                      <p><strong>{key} : </strong> {value.join(', ')}</p>
                    ) : (
                      <p><strong>{key} : </strong> {value}</p>
                    )}
                  </div>
                ))
              }
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default HistoricalFigures