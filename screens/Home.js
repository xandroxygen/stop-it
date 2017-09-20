import React from "react"
import { connect } from "react-redux"
import { pressButton } from "../actions"
import styles from "../config/styles"
import { Text, View } from "react-native"
import Button from "../components/Button"

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.show && <Text>Hello World!</Text>}
        <Button text="Toggle" onPress={this.props.toggleText} />
      </View>
    )
  }
}

const HomeContainer = connect(
  state => ({
    show: state.show,
  }),
  dispatch => ({
    toggleText: () => dispatch(pressButton),
  })
)(Home)

export default HomeContainer
