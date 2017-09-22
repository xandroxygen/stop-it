import React from "react"
import { Button, Text } from "native-base"
import styles from "./styles"

const MenuButton = props => {
  const { text, textColor, children, onPress, style } = props
  const textStyle = textColor ? { color: textColor } : {}
  return (
    <Button style={[styles.menuButton, style]} onPress={onPress}>
      {children}
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </Button>
  )
}

MenuButton.defaultProps = {
  text: "Menu Button",
  onPress: () => console.log("button pressed"),
}

export default MenuButton
