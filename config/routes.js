import { StackNavigator } from "react-navigation"

import AddRegistration from "../screens/AddRegistration"
import RegistrationList from "../screens/RegistrationList"
import Home from "../screens/Home"

const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    RegistrationList: {
      screen: RegistrationList,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
      }),
    },
  },
  {
    headerMode: "screen",
  }
)

export default StackNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    AddRegistration: {
      screen: AddRegistration,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
      }),
    },
  },
  {
    mode: "modal",
    headerMode: "none",
  }
)
