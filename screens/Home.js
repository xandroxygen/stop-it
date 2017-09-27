import React from "react"
import { connect } from "react-redux"
import { pressButton } from "../actions"
import styles from "../config/styles"
import colors from "../config/colors"
import images from "../config/images"
import { Text, View, Image } from "react-native"
import { Content } from "native-base"
import Button from "../components/Button"
import MenuButton from "../components/MenuButton"
import { MaterialIcons } from "@expo/vector-icons"

class Home extends React.Component {
  render() {
    return (
      <Content
        contentContainerStyle={[styles.container, styles.homeScreen]}
        scrollEnabled={false}
      >
        <Image source={images.appLogo} style={{ width: 100, height: 115 }} />
        <Text style={styles.logoText}>stop it</Text>
        <View style={styles.container}>
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
