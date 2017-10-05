import React from "react"
import { Button, Text } from "native-base"
import styles from "./styles"

const MyButton = props => {
  const { text, onPress, style } = props
  return (
    <Button style={[styles.button, style.button]} onPress={onPress}>
      <Text style={[styles.text, style.text]}>{text}</Text>
    </Button>
  )
}

MyButton.defaultProps = {
  text: "Button Text",
  onPress: () => console.log("button pressed"),
}

export default MyButton
