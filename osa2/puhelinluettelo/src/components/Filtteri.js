import React from 'react';
import Yhteystieto from './components/Yhteystieto';

const Filtteri =(yhteystiedot) =>yhteystiedot.map(yhteystieto => 
    <><Yhteystieto 
      key={yhteystieto.nimi}
      nimi={yhteystieto.nimi}
      numero={yhteystieto.numero} /></>
   )


  


    export default Filtteri