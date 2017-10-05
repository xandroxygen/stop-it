import React from "react"
import { connect } from "react-redux"
import { pressButton } from "../actions"
import colors from "../config/colors"
import images from "../config/images"
import { Text, View, Image, StyleSheet } from "react-native"
import Container from "../components/Container/Container"
import MenuButton from "../components/MenuButton/MenuButton"
import { MaterialIcons } from "@expo/vector-icons"

const styles = StyleSheet.create({
  homeScreen: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: colors.background,
  },
  menu: {
    justifyContent: "center",
  },
  logoText: {
    fontFamily: "ProximaNovaSemiBold",
    fontSize: 46,
  },
  logo: {
    width: 100,
    height: 115,
  },
})

class Home extends React.Component {
  handlePressAddRegistration = () => {
    console.log("add registration pressed")
    this.props.navigation.navigate("AddRegistration", {
      title: "Add a Registration",
    })
  }

  handlePressRegistrationList = () => {
    console.log("registration list pressed")
    this.props.navigation.navigate("RegistrationList", {
      title: "My Registrations",
    })
  }

  render() {
    return (
      <Container style={styles.homeScreen}>
        <Image source={images.appLogo} style={styles.logo} />
        <Text style={styles.logoText}>stop it</Text>
        <Container style={styles.menu}>
          <MenuButton
            text="Add a Registration"
            textColor={colors.secondaryDarkest}
            onPress={this.handlePressAddRegistration}
          >
            <MaterialIcons name="add" size={70} color={colors.secondary} />
          </MenuButton>
          <MenuButton
            text="Registration List"
            textColor={colors.tertiaryDarkest}
            onPress={this.handlePressRegistrationList}
          >
            <MaterialIcons name="list" size={70} color={colors.tertiary} />
          </MenuButton>
        </Container>
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
