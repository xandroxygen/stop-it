import React from "react"
import { Button, Text } from "native-base"
import styles from "./styles"

const MyButton = props => {
  const { text, onPress } = props
  return (
    <Button style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Button>
  )
}

MyButton.defaultProps = {
  text: "Button Text",
  onPress: () => console.log("button pressed"),
}

export default MyButton
