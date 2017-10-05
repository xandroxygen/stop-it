import React from "react"
import { StatusBar } from "react-native"
import { Content, View } from "native-base"
import styles from "./styles"

const Container = props => {
  const { style = {}, fullScreen, children } = props
  if (fullScreen) {
    style.paddingTop = StatusBar.currentHeight || 20
  }
  return <View style={[styles.container, style]}>{children}</View>
}

export default Container
