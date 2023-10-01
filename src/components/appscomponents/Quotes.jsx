import React, { useEffect, useState } from 'react'
import Quotes_emoji from '../../assets/images/quotes_emoji.png'

const Quotes = () => {
  const [quote, setQuote] = useState({
    dataQuote: "",
    dataAuthor: "",
  })

  const generateQuotes = async () => {
    const selectoption = document.getElementById('select-category');
    let api_key = `${import.meta.env.VITE_API_KEY}`;
    let category = selectoption.value;
    // console.log(category);
    let url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': api_key,
        'Content-Type': 'application/json',
      }
    });
    let data = await response.json();

    setQuote({
      dataQuote: data[0].quote,
      dataAuthor: data[0].author
    })
  }

  const getQuotes = async (event) => {
    event.preventDefault();
    generateQuotes();
  }

  useEffect(() => {
    generateQuotes()
  }, [])

  return (
    <div id='quotespage'>
      <div id="mainquotesdiv">
        <form className='my-5 bg-yellow-100' onSubmit={getQuotes}>
          <select name="select-category" id="select-category" className='text-black'>
            <option value="dreams">Dreams</option>
            <option value="alone">Alone</option>
            <option value="education">Education</option>
            <option value="amazing">Amazing</option>
            <option value="experience">Experience</option>
            <option value="anger">Anger</option>
            <option value="failure">Failure</option>
            <option value="attitude">Attitude</option>
            <option value="family">Family</option>
            <option value="beauty">Beauty</option>
            <option value="fitness">Fitness</option>
            <option value="forgiveness">Forgiveness</option>
            <option value="friendship">Friendship</option>
            <option value="computers">Computers</option>
            <option value="courage">Courage</option>
            <option value="future">Future</option>
            <option value="happiness">Happiness</option>
            <option value="health">Health</option>
            <option value="history">History</option>
            <option value="hope">Hope</option>
            <option value="imagination">Imagination</option>
            <option value="inspirational">Inspirational</option>
            <option value="intelligence">Intelligence</option>
            <option value="knowledge">Knowledge</option>
            <option value="leadership">Leadership</option>
            <option value="learning">Learning</option>
            <option value="life">Life</option>
            <option value="love">Love</option>
            <option value="marriage">Marriage</option>
            <option value="success">Success</option>
          </select>
          <button id='btn-quotes-search'>Search</button>
        </form>
          <div id="quotes-resultdiv" className='bg-yellow-100'>
            <p id='quote-result-para'><strong>Quote: </strong> {quote.dataQuote}</p>
            <br />
            <p id='quote-author-para'><strong>Author : </strong> {quote.dataAuthor}</p>
          </div>
      </div>
    </div>
  )
}

export default Quotes