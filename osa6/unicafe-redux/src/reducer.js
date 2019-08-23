const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GOOD':
      const updated={
        good:state.good+1,
        ok:state.ok,
        bad:state.bad
      }
        state=updated
      return state
    case 'OK':
        const updated2={
          good:state.good,
          ok:state.ok+1,
          bad:state.bad
        }
          state=updated2
        return state
    case 'BAD':
        const updated3={
          good:state.good,
          ok:state.ok,
          bad:state.bad+1
        }
          state=updated3
        return state
    case 'ZERO':
      const updated4={
        good:0,
        ok:0,
        bad:0
      }
      state=updated4
      return state

    default: return state
  }
  
}

export default counterReducer