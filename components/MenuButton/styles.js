import { StyleSheet } from "react-native"
import colors from "../../config/colors"

export default StyleSheet.create({
  menuButton: {
    height: 140,
    width: 140,
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
    fontSize: 20,
    lineHeight: 20,
    paddingLeft: 8,
    paddingRight: 8,
    fontWeight: "500",
    textAlign: "center",
  },
})
