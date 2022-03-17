import './App.css';
import data from "./data"
import React from 'react';


function App() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState([]);
  const handleSubmit = (e)=>{
    e.preventDefault();
    let amount = parseInt(count);
    if(amount <= 0){
      amount = 1;
    }
    if(amount > 8){
      amount = 8;
    }
    setText(data.slice(0, amount));  }

  return (
   <>
   <h2>Paragraph generator</h2>
   <div>
     <form action="" onSubmit={handleSubmit}>
       <label htmlFor="amount">
         No. of Paragraphs
       </label>
       <input type="number" name="amount" id="amount" value={count} onChange={(e)=>setCount(e.target.value)}/>
       <button type="submit">Generate</button>
     </form>
     <article className='lorem-text'>
     {text.map((value, index)=>{
       return (
       <p key={index}>
         {value}
         <br/>
       </p>
       );
     })}
     </article>
   </div>
   </>
  );
}

export default App;
