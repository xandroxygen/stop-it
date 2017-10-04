import React from "react"
import { Text, StatusBar, StyleSheet } from "react-native"
import { Content } from "native-base"
import Button from "../components/Button"
import defaultStyles from "../config/styles"

const styles = StyleSheet.create({
  paddingTop: StatusBar.currentHeight,
})

class AddRegistration extends React.Component {
  handlePressBack = () => {
    this.props.navigation.goBack(null)
  }

  render() {
    return (
      <Content contentContainerStyle={[defaultStyles.container, styles]}>
        <Text>Add Registration</Text>
        <Button onPress={this.handlePressBack}>
          <Text>Go Back</Text>
        </Button>
      </Content>
    )
  }
}

export default AddRegistration
