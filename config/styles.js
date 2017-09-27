import { StyleSheet } from "react-native"
import colors from "./colors"

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  homeScreen: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: colors.background,
  },
  logoText: {
    fontFamily: "ProximaNovaSemiBold",
    fontSize: 46,
  },
})
