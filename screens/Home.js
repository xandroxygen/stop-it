import React from "react"
import { connect } from "react-redux"
import { pressButton } from "../actions"
import styles from "../config/styles"
import colors from "../config/colors"
import { Text, View } from "react-native"
import { Container, Content } from "native-base"
import Button from "../components/Button"
import MenuButton from "../components/MenuButton"
import { MaterialIcons } from "@expo/vector-icons"

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.container} scrollEnabled={false}>
          <MenuButton text="Add" textColor={colors.primary}>
            <MaterialIcons name="add" size={100} color={colors.primary} />
          </MenuButton>
          <MenuButton text="List" textColor={colors.secondary}>
            <MaterialIcons name="list" size={100} color={colors.secondary} />
          </MenuButton>
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
