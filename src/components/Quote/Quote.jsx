import { useEffect, useState } from "react";
import QuoteWrapper from "./QuoteWrapper";
import Button from "../Button";
import {BiSolidQuoteLeft,BiSolidQuoteRight} from 'react-icons/bi'


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
    <div className="flex items-center justify-center flex-col h-[80%]">
 
    <BiSolidQuoteLeft className="text-white text-4xl"/>
      <h1 className="text-4xl md:text-6xl font-bold text-white max-w-[50%] max-h-[50%] overflow-y-auto md:text-center">
      {quote}</h1>
      
      <Button />
    </div>
    
    
  )
}

export default Quote