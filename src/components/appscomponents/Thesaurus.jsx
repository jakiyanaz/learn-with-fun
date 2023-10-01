import React, { useState } from 'react'
import thesaurus_left_img from '../../assets/images/triviaimg2.png'

const Thesaurus = () => {
    const [synonym, setSynonym] = useState({
        dataSynonym: "",
    })
    const [antonym, setAntonym] = useState({
        dataAntonym: "",
    })

    const thesaurusApp = async () => {
        const inputValue = document.getElementById('form-input');
        const word = inputValue.value;
        let api_key = `${import.meta.env.VITE_API_KEY}`;
        let url = `https://api.api-ninjas.com/v1/thesaurus?word=${word}`;
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Api-Key': api_key,
                'content-Type': 'application/json',
            }
        });
        let data = await response.json();
        console.log(data);
        let dataSynonyms = data.synonyms;
        let dataAntonymes = data.antonyms;
        
        /*
        const synonymsContent = dataSynonyms.map((item, index) => (
            <p key={index}>
                {item}
            </p>
        ));

        setSynonym({
            dataSynonym: synonymsContent,
        })
        
        
        const antonymContent =  dataAntonymes.map((item, index) => (
            <p key={index}>
                {item}
            </p>
        ));

        setAntonym({
            dataAntonym: antonymContent,
        })
        */

        setSynonym({
            dataSynonym: (
              <div>
                {dataSynonyms.length !== 0 ? (
                  dataSynonyms.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))
                ) : (
                  <p>No synonyms found for this word</p>
                )}
              </div>
            ),
        });
      
        setAntonym({
            dataAntonym: (
              <div>
                {dataAntonymes.length !== 0 ? (
                  dataAntonymes.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))
                ) : (
                  <p>No Antonymes found for this word</p>
                )}
              </div>
            ),
        });
    }
    
    const getThesaurus = (event) => {
        event.preventDefault();
        thesaurusApp();
    }

  return (
    <div id='thesaurus-app'>
        <div id="thesaurus-left" className='thesaurus-sec'>
          <img src={thesaurus_left_img} alt="" />
        </div>
        <div id="thesaurus-right" className='thesaurus-sec'>
            <div id="thesaurus-app-wrapper">
                <form onSubmit={getThesaurus}>
                    <input type="text" name='form-input' id='form-input' placeholder='Enter the word, Ex: agree' />
                    <button id='btn-thesaurus-app'>Search🧐</button>
                </form>
                <div id="thesaurus-app-result">
                    <div id="synonyms" className='bg-yellow-100'>
                        <h1><b>SYNONYMES 🧭📜</b></h1>
                        {synonym.dataSynonym}
                    </div>
                    <div id="antonyms" className='bg-yellow-100'>
                        <h1><b>ANTONYMES 🚫🔄</b></h1>
                        {antonym.dataAntonym}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Thesaurus