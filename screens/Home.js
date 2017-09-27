import React from "react"
import { connect } from "react-redux"
import { pressButton } from "../actions"
import defaultStyles from "../config/styles"
import colors from "../config/colors"
import images from "../config/images"
import { Text, View, Image, StyleSheet } from "react-native"
import { Content } from "native-base"
import MenuButton from "../components/MenuButton"
import { MaterialIcons } from "@expo/vector-icons"

const styles = StyleSheet.create({
  homeScreen: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: colors.background,
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
  render() {
    return (
      <Content
        contentContainerStyle={[defaultStyles.container, styles.homeScreen]}
        scrollEnabled={false}
      >
        <Image source={images.appLogo} style={styles.logo} />
        <Text style={styles.logoText}>stop it</Text>
        <View style={defaultStyles.container}>
          <MenuButton
            text="Add a Registration"
            textColor={colors.secondaryDarkest}
          >
            <MaterialIcons name="add" size={70} color={colors.secondary} />
          </MenuButton>
          <MenuButton
            text="Registration List"
            textColor={colors.tertiaryDarkest}
          >
            <MaterialIcons name="list" size={70} color={colors.tertiary} />
          </MenuButton>
        </View>
      </Content>
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
