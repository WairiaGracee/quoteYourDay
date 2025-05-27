import React from 'react'
import './newQuote.css' 


function NewQuote(){
    return(
        <div>
            <div id="new-quote">
                <p>'Click Below to get new Quote'</p>
            </div>

            <div className='quoteBtns'>
                <button id='getNewbtn'>New Quote</button>
                <button id='saveCurrentbtn'>Save to Favorites</button>
            </div>
        </div>
    )
}

export default NewQuote;