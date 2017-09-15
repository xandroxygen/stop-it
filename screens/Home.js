import React from "react"
import styles from "../config/styles"
import { Text, View } from "react-native"
import Button from "../components/Button"

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <Button text="Details" />
      </View>
    )
  }
}
