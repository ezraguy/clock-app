import React, { useState, useEffect } from 'react';
import '../scss/quote.scss'
import { getQuote } from '../services/quotes-service.js'
import refreshIcon from '../icons/icon-refresh.svg'
const Quote = () => {
    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')
    const [refreshClass, setRefreshClass] = useState('refresh')
    useEffect(() => {
        getQuoteData();
    }, [])

    const getQuoteData = async () => {
        setRefreshClass('refresh refresh-spin')
        const data = await getQuote();
        setTimeout(() => {
            setAuthor(data.author);
            setQuote(data.content);
            setRefreshClass('refresh')
        }, 1000);
    }

    return (
        <div className="quote">
            <div className="content">
                <p className="quote-content">{quote} </p>
                <img src={refreshIcon} onClick={getQuoteData} className={refreshClass} alt="refresh" />
            </div>
            <p>{author}</p>
        </div>
    );
}

export default Quote;