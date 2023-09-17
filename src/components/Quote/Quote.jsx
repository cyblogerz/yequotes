import { useEffect, useState } from "react";
import './Quote.css';
import QuoteWrapper from "./QuoteWrapper";



const Quote = () => {
    const [quote,setQuote] = useState('');
    const apiUrl = 'https://api.kanye.rest';

    useEffect(()=>{
        fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => setQuote(data.quote))
        .catch((error)=>console.error("Error Fetching data"))
    },[]);

  return (
    <QuoteWrapper className="quotebody">
        <h1 className="quote">{quote}</h1>
        <p className="author">-Kanye West</p>
    </QuoteWrapper>
    
    
  )
}

export default Quote