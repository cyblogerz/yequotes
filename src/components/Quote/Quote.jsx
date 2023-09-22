import { useEffect, useState } from "react";
import QuoteWrapper from "./QuoteWrapper";
import Button from "../Button";



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
    <div className="flex items-center justify-center flex-col h-screen">
      <h1 className="text-6xl font-bold text-white max-w-[50%] text-center">{quote}</h1>
      <Button />
    </div>
    
    
  )
}

export default Quote