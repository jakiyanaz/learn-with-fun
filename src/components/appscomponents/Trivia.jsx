import React, {useState, useEffect} from 'react'

const Trivia = () => {

    const [trivia, setTrivia] = useState({
      dataTriviaElement: "",
    })
  
    const generateTrivia = async () => {
      const selectoption = document.getElementById('trivia-category');
      const selectlimit = document.getElementById('trivia-limit')
      let api_key = `${import.meta.env.VITE_API_KEY}`;
      let category = selectoption.value;
      let limit = Number(selectlimit.value);
      console.log(limit);
      // console.log(category);
      let url = `https://api.api-ninjas.com/v1/trivia?limit=${limit}&category=${category}`;
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': api_key,
          'Content-Type': 'application/json',
        }
      });
      let data = await response.json();
      console.log(data);

      const triviaElements = data.map((item, index) => (
        <div className='ques-ans-div bg-yellow-100' key={index}>
          <p>Question ❓🤔 : {item.question}</p><br />
          <p>Answer 💬💡 : {item.answer}</p>
        </div>
      ));
    
  
      setTrivia({
        dataTriviaElement: triviaElements,
      })
    }
  
    const getTrivia = async (event) => {
      event.preventDefault();
      generateTrivia();
    }
  
    useEffect(() => {
      generateTrivia()
    }, [])

  return (
    <div id='trivia-app'>
      <div id="left" className='bg-orange-100 shadow-lg shadow-fuchsia-300'>
        <form className='border border-3' onSubmit={getTrivia}>
          <h3 className='left-design labels'>Category 👇</h3>
          <select name="trivia-category" id="trivia-category" className='left-design'>
            <option value="artliterature">ArtLiterature</option>
            <option value="language">Language</option>
            <option value="sciencenature">ScienceNature</option>
            <option value="general">General</option>
            <option value="fooddrink">FoodDrink</option>
            <option value="peopleplaces">PeoplePlaces</option>
            <option value="geography">Geography</option>
            <option value="historyholidays">HistoryHolidays</option>
            <option value="entertainment">Entertainment</option>
            <option value="toysgames">ToysGames</option>
            <option value="music">Music</option>
            <option value="mathematics">Mathematics</option>
            <option value="sportsleisure">SportsLeisure</option>
          </select>
          <h3 className='left-design labels'>Limit 👇</h3>
          <select name="trivia-limit" id="trivia-limit" className='left-design'>
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
          <button id='btn-search' className='left-design'>Go 🧐🔎</button>
        </form>
      </div>
      <div id="right" className='bg-orange-100 shadow-lg shadow-fuchsia-300'>
        {trivia.dataTriviaElement}
      </div>
    </div>
  )
}

export default Trivia