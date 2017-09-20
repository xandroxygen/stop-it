const initialState = {
  show: true,
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action
  const newState = Object.assign({}, state)

  switch (type) {
    case "PRESS_BUTTON":
      newState.show = !newState.show
  }

  return newState
}
