import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'

const Info =(props)=> {

    const info=props.maa
    const kuva=info[0].flag
    const kielet=()=>info[0].languages.map(kieli =>
        <li key={kieli.name}>{kieli.name}</li>)

        if (info.length===1){
            return (
                <>Kielet:<ul>{kielet()}</ul>
                <img src={kuva} width='150em'/></>
            )
        } else {
            return null
        }

}

export default Info