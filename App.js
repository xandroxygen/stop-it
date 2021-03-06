import React from "react"
import Expo from "expo"
import { Provider } from "react-redux"
import { Container } from "native-base"
import { createStore } from "redux"
import { reducer } from "./reducers"
import styles from "./config/styles"
import Home from "./screens/Home"
import Navigator from "./config/routes"

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
      ProximaNova: require("./assets/fonts/proximanova-regular-webfont.ttf"),
      ProximaNovaBold: require("./assets/fonts/proximanova-bold-webfont.ttf"),
      ProximaNovaSemiBold: require("./assets/fonts/proximanova-semibold-webfont.ttf"),
      ProximaNovaLight: require("./assets/fonts/proximanova-light-webfont.ttf"),
    })
    await Expo.Asset.loadAsync([require("./assets/icons/app-icon.png")])

    this.setState({ isReady: true })
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }
    return (
      <Provider store={store}>
        <Container>
          <Navigator />
        </Container>
      </Provider>
    )
  }
}
