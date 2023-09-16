import { useEffect, useState } from "react"



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
    <div>
        <h1>{quote}</h1>
        <p>-Kanye West</p>
    </div>
    
    
  )
}

export default Quote