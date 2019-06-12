import React from 'react'

const Lomake=(props)=> {



    return (
            <div>
                 <form onSubmit={props.onSubmit}>
          <div>
            nimi:<br/> <input value={props.newName} onChange={props.lisaaNimi} />
          </div>
            <div>
             puhelinnumero:<br/> <input value={props.newNumber} onChange={props.lisaanro} />
            </div>
            <div>
                <button type="submit" >lisää</button>
        </div>
      </form>
            </div>
    )
}

export default Lomake