import React from "react"
import { Text, TouchableOpacity } from "react-native"
import styles from "./styles"

const Button = props => {
  const { text, onPress } = props
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  text: "Button Text",
  onPress: () => console.log("button pressed"),
}

export default Button
