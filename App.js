import React from "react"
import Expo from "expo"
import { Provider } from "react-redux"
import { Container } from "native-base"
import { createStore } from "redux"
import { reducer } from "./reducers"
import styles from "./config/styles"
import Home from "./screens/Home"

const store = createStore(reducer)

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isReady: false,
    }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    })
    await Expo.Asset.loadAsync([
      require("./assets/icons/stop-it-icon-transparent.png"),
    ])

    this.setState({ isReady: true })
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }
    return (
      <Provider store={store}>
        <Container>
          <Home />
        </Container>
      </Provider>
    )
  }
}
