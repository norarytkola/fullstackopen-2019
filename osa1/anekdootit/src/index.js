import React from 'react';
import ReactDOM from 'react-dom';

const Lause = (props) => {
    return (
        <>
        {props.anecdotes[props.selected]}<br/>
        </>
    )
}
const Tilasto =(aanet, Array )=>{
  
  return (
    <>

    </>
  )
}





const App = (props) => { 
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'

     ]
    const listanpituus=anecdotes.length;
    const [selected, setSelected] = React.useState(0);
    let random=(Math.round(5 * Math.random()));
    const [aanet, aanesta]=React.useState(Array(listanpituus).fill(0))
    const kopioi=[...aanet]
    const aanestys =(selected)=> {
      kopioi[selected]+=1
      aanesta(kopioi)
    }
   

  
    return (
      <div>
        <Lause anecdotes={anecdotes} selected={selected}/>
        <button onClick={() => setSelected(random)}>Next anecdote</button>
        <button onClick={()=> aanestys(selected) }>Vote</button>
        Ääniä:{aanet[selected]}
        
        
    
        
      </div>
    )
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root'));


