import React from 'react'
import './newQuote.css' 
import { useState } from 'react'


function NewQuote(){
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [saved, setSaved] = useState ([])

    const fetchQuotes = () => {
        setQuote('Loading..')
        setAuthor('')

        fetch('https://dummyjson.com/quotes/random')
        .then(res => res.json())
        .then(data => {
            setQuote(data.quote)
            setAuthor(data.author)
        })
        .catch(err => {
            setQuote('Failed to fetch quote.')
            setAuthor('')
            console.error(err)
        })
    }

    const saveQuotes = () => {
        if(quote){
            const newSaved =[...saved, `" ${quote}" -- ${author}`]
            setSaved(newSaved)
        }

    }

    return(
        <div>
            <div id="new-quote">
                <p>{quote ? `${quote} -- ${author}` : 'Click Below to get a new Quote' }</p>
            </div>

            <div className='quoteBtns'>
                <button onClick={fetchQuotes}>New Quote</button>
                <button onClick={saveQuotes}>Save to Favorites</button>
            </div>

            <h2>★ Favorite Quotes ★</h2>

            <div className='favorites'>
                <ol id="fav-quotes">
                    {saved.map((item, index) =>(
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default NewQuote;