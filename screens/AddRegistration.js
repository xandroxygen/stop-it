import React from "react"
import { Text, StatusBar, StyleSheet } from "react-native"
import { View, Content } from "native-base"
import Button from "../components/Button/Button"
import Container from "../components/Container/Container"
import colors from "../config/colors"

const navButtonStyle = {
  flex: 1,
  alignSelf: "stretch",
  height: null,
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
  },
  navButtons: {
    flex: 0.125,
    flexDirection: "row",
  },
  saveButton: {
    backgroundColor: colors.primary,
    ...navButtonStyle,
  },
  cancelButton: {
    backgroundColor: colors.complementary,
    ...navButtonStyle,
  },
})

class AddRegistration extends React.Component {
  handlePressCancel = () => {
    this.props.navigation.goBack(null)
  }
  handlePressSave = () => {
    alert("saved")
  }

  render() {
    return (
      <Container fullScreen={true}>
        <Text>Add Registration</Text>
        <View style={styles.frame}>
          <Text>frame</Text>
        </View>
        <View style={styles.navButtons}>
          <Button
            style={{
              button: styles.cancelButton,
            }}
            text="Cancel"
            onPress={this.handlePressCancel}
          />
          <Button
            style={{
              button: styles.saveButton,
            }}
            text="Save"
            onPress={this.handlePressSave}
          />
        </View>
      </Container>
    )
  }
}

export default AddRegistration
