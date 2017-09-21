import React from "react"
import { connect } from "react-redux"
import { pressButton } from "../actions"
import styles from "../config/styles"
import colors from "../config/colors"
import { Text, View } from "react-native"
import { Container, Content } from "native-base"
import Button from "../components/Button"

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          {this.props.show && <Text>Hello World!</Text>}
          <Button
            text="Toggle"
            style={{ backgroundColor: colors.buttonBackground }}
            onPress={this.props.toggleText}
          />
        </Content>
      </Container>
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
