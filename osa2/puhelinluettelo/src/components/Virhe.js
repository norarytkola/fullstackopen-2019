import React from 'react'

const Virhe = ({ ilmoitus }) => {
    if (ilmoitus === null) {
      return null
    }

return (

<div className="virhe">{ilmoitus} </div>
)
}

export default Virhe