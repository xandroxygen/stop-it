const initialState = {
  currentPage: "HOME",
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action
  const newState = Object.assign({}, state)

  switch (type) {
    case "ADD_REGISTRATION":
      newState.currentPage = "ADD_REG"
    case "VIEW_REGISTRATION":
      newState.currentPage = "LIST_REG"
  }

  return newState
}
