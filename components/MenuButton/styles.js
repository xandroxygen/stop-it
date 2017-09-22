import { StyleSheet } from "react-native"
import colors from "../../config/colors"

export default StyleSheet.create({
  menuButton: {
    height: 200,
    width: 200,
    padding: 10,
    alignSelf: "auto",
    flex: 0,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 8,
    margin: 10,
  },
  text: {
    color: colors.text,
    fontSize: 54,
    lineHeight: 54,
  },
})
