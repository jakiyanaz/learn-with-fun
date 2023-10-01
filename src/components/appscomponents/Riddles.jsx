import React, { useState } from 'react'

const Riddles = () => {
  const [riddle, setRiddle] = useState(null);

  const getRiddles = async (e) => {
    e.preventDefault();
    const riddlesInput = document.getElementById('riddles-input');
    const inputValue = Number(riddlesInput.value);
    let api_key = import.meta.env.VITE_API_KEY;
    let url = `https://api.api-ninjas.com/v1/riddles?limit=${inputValue}`;
    let response = await fetch(url, {
      method: 'GET',
        headers: {
          'X-Api-Key': api_key,
          'Content-Type': 'application/json',
        }
    });
    let data = await response.json();
    // console.log(data);
    setRiddle(data);
  }

  const showAnswer = (event) => {
    const answerPara = event.target.parentElement.querySelector('#riddle-answer');
    const btnShowAnswer = event.target;
    answerPara.style.display = "block";
    btnShowAnswer.style.display = "none";
  };

  return (
    <div id="riddles-app">
      <div id="riddles-app-div1" className='riddles-app-div'>
        <h3 style={{textAlign: 'center', fontWeight: 'bold', fontSize: '25px', color: 'white'}}>Limit (must be between 1 to 20)👇</h3>
        <form id='riddles-app-form' onSubmit={getRiddles}>
          <input type="text" name='riddles-input' id='riddles-input' placeholder='Enter number of riddles you want, must be from 1 to 20 only.....' />
          <button id='btn-riddles-app'>Search</button>
        </form>
      </div>
      <div id="riddles-app-result" className='riddles-app-div'>
        {riddle && (
          riddle.map((item, index) => (
            <div className='riddle-result-div' key={index}>
              <p id='riddle-question'><b>Question : </b>{item.question}</p>
              <p id='riddle-answer'><b>Answer : </b>{item.answer}</p>
              <button className='btn-show-riddle-answer' onClick={showAnswer}>Show Answer</button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Riddles