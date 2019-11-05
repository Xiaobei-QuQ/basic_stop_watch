const initState = {
  count: 0
}

const counter = (state = initState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        count: state.count + 1
      })
    default:
      return state
  }
}

export default counter