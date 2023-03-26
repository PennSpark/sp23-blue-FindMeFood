import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(42, 40, 57, 1.0)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: "100%",
    },
  
    nav: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: "84.6%",
      height: "50%",
      backgroundColor: 'rgba(59, 57, 73, 1.0)',
      borderRadius: 25,
      alignItems: 'center',
    },
    nav_flexbox: {
      width: "120%",
      height: "27.5%",
      position: 'flex',
      flexDirection: 'row',
      alignItems: 'center' ,
      justifyContent: 'space-evenly'
    },
    home_background: {
      width: "21%",
      height: "64%",
      position: 'flex',
      alignItems: 'center',
      backgroundColor: 'rgba(89, 87, 103, 0.8)',
      borderRadius: 15,
    },

    text: {
      backgroundColor: 'transparent',
      fontSize: "18%",
      color: '#fff',
    },
    button: {
      backgroundColor: 'pink',
      width: "20%"
    },
})