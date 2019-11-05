const INCREMENT = 'INCREMENT'


export const increment = text => {
  return ({
    type: INCREMENT,
    text
  })
}


