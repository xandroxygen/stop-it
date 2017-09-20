import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { reducer } from "./reducers"
import styles from "./config/styles"
import Home from "./screens/Home"

export default class App extends React.Component {
  render() {
    const store = createStore(reducer)
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}
