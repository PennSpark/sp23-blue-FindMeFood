import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(39, 37, 53, 1.0)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 850,
    },
  
    nav: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 715,
      height: 800,
      backgroundColor: 'rgba(59, 57, 73, 1.0)',
      borderRadius: 25,
      alignItems: 'center',
    },
    nav_flexbox: {
      width: 500,
      height: 110,
      position: 'flex',
      flexDirection: 'row',
      alignItems: 'center' ,
      justifyContent: 'space-evenly'
    },
    home_background: {
      width: 100,
      height: 70,
      position: 'flex',
      alignItems: 'center',
      backgroundColor: 'rgba(89, 87, 103, 0.8)',
      borderRadius: 15
    },

    text: {
      backgroundColor: 'transparent',
      fontSize: 15,
      color: '#fff',
    },
    button: {
      backgroundColor: 'pink',
      width: 100
    },
})