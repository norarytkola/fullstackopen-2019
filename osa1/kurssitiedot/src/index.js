import React from 'react';
import ReactDOM from 'react-dom';

const Header =(props)=> {
    console.log(props);
    return (
        <h1>
        Kurssin nimi: {props.name}
        </h1>
    )
}

const Total =(props)=> {
    return (
    <div>
         Yhteensä {props.yht} tehtävää.
    </div>
    )
}

const Part =(props)=> {
    console.log(props);
    return (
        <div>
           Nimi:{props.nimi} <br/> Kurssimäärä:{props.int}
        </div>

    )
}
const Content =(props)=> {
    return (
        <div>
            <Part nimi={props.nimi1} int={props.int1}/>
            <Part nimi={props.nimi2} int={props.int2}/>
            <Part nimi={props.nimi3} int={props.int3}/>
        </div>
    )
}

const App =()=> {
    const kurssi= {
        nimi:"Half Stack-sovelluskehitys",

        osat:
        [   {
            nimi:"Reactin perusteet",
            tehtavat:10
            },
            {
            nimi:"Tiedonvälitys propseilla",
            tehtavat:7
            },
            {
            nimi:"Komponenttien tila",
            tehtavat:14
            }
        ] 
    }

    return (
        <div>
            <Header name={kurssi.nimi}/>
            <Content nimi1={kurssi.osat[0].nimi} nimi2={kurssi.osat[1].nimi} nimi3={kurssi.osat[2].nimi} int1={kurssi.osat[0].tehtavat} int2={kurssi.osat[1].tehtavat} int3={kurssi.osat[2].tehtavat} />
            <Total yht= {kurssi.osat[0].tehtavat+kurssi.osat[1].tehtavat+kurssi.osat[2].tehtavat}/>

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

/*Koko sovellus on nyt ikävästi yhdessä komponentissa. Refaktoroi sovelluksen koodi siten, että se koostuu kolmesta 
uudesta komponentista: Header, Content ja Total. Kaikki data pidetään edelleen komponentissa App, joka välittää 
tarpeelliset tiedot kullekin komponentille props:ien avulla. Header huolehtii kurssin nimen renderöimisestä, Content 
osista ja niiden tehtävämääristä ja Total tehtävien yhteismäärästä.*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

