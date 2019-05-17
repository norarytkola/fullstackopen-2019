import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


const Header =()=> {
    return(
        <div>
            <h1>Anna palautetta:</h1>
        </div>
    )
}
/*
const Kokonais =(props)=> {
    return(
        <div>
            Hyvien palautteiden määrä:{props.hyva}<br/>
            Neutraalien määrä:{props.neutraali}<br/>
            Huonojen palautteiden määrä:{props.huono}<br/>
        </div>
    )
}
const YhteisMaara =(props) => {
    return(
        <div>
            Palautteiden kokonaismäärä: {props.yht}<br/>
        </div>
    )

}
const Keskiarvo =(props)=> {
    return(
        <div>
            Palautteiden keskiarvo: {props.ka}

        </div>
    )
}
const Positiiviset =(props) => {
    return(
        <div>
        Positiivisia palautteita: {props.prosentti}
        </div>
    )
}
*/
const Statistics =(props)=> {
    if (props.onko > 0 ){
    return(
        <> 
        <tr>
           <td>{props.text}</td><td>{props.value}</td>
        </tr>
        </>
    )
    } else { return null}
}
const Nappi =(props)=> {
    return (
        <>
            <button onClick={props.handleclick}>{props.nimi}</button>
        </>
    )
}
const OnkoPalautteita =(props)=> {

        if  ( props.onko === 0) {
            return (
            <div>
                <h1>Statistiikka:</h1>
                  Ei vielä yhtään palautteita.
             </div>
           )} else { return <h1>Statistiikka:</h1>}
           
}




const App = (props) => {
    const [hyva, asetaHyva] = React.useState(0)
    const  [neutraali, asetaNeutraali] = React.useState(0)
    const [huono, asetaHuono] = React.useState(0)
    let yht=hyva+huono+neutraali

    

        return (
    <div>
        <Header/>
        <Nappi handleclick={() => asetaHyva(hyva +1)} nimi="hyva"></Nappi>
        <Nappi handleclick={() =>asetaNeutraali(neutraali +1)} nimi="neutraali"></Nappi>
        <Nappi handleclick={() =>asetaHuono(huono +1)} nimi="huono"></Nappi>
        <OnkoPalautteita onko={yht} />
        <Statistics onko={yht} text="Hyvä:" value ={hyva} />
        <Statistics onko={yht} text="Neutraali:" value ={neutraali} />
        <Statistics onko={yht} text="Huono:" value ={huono} />
        <Statistics onko={yht} text="Yhteensä:" value ={yht} />
        <Statistics onko={yht} text="Keskiarvo:" value ={((hyva*1)+(huono*-1))/yht} />
        <Statistics onko={yht} text="Positiivisia:" value ={hyva/yht*100} />
       
    
    </div>
        )


}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();