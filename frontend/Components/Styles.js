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


    form: {
      backgroundColor: 'white',
    },


    smol: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: "50%",
      height: "10%",
      backgroundColor: 'rgba(59, 57, 73, 1.0)',
      borderRadius: 25,
      alignItems: 'center',
    },

    test_box: {
      flex: 1,
      borderColor: "black",
      top: '15%',
    },

    text: {
      backgroundColor: 'transparent',
      fontSize: "18%",
      color: '#fff',
    },
    main_icon: {
      fontSize: '70%',
      color: '#C282FA',
    },
    side_icon: {
      fontSize: '50%',
      color: 'white',
    },
    button: {
      backgroundColor: 'pink',
      width: "20%"
    },

    page_header: {
      flexDirection: 'row',
      height: '10%',
      width: '100%',
      borderBottomColor: 'white',
      borderBottomWidth: '2%',

      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: '10%',
      paddingRight: '10%',
    },

    ft_item: {
      justifyContent: 'space-between',
      //alignItems: 'center',
      padding: '4%',
      borderColor: 'white',
      borderWidth: '2%',
      borderRadius: '10%',
      backgroundColor: 'rgba(57, 55, 72, 1.0)',
    },
    ft_item_text_name: {
      fontSize: '30%',
      backgroundColor: 'transparent',
      color: '#fff',
    },
    ft_item_text_location: {
      backgroundColor: 'transparent',
      fontSize: "18%",
      color: '#fff',
    },
    ft_item_img: {
      width: 200, 
      height: 200,
    },

    list: {
      color: 'white',
      paddingLeft: '10%',
      paddingRight: '10%',
    },

    upload_btn: {
      backgroundColor: 'grey',
    },

    map: {
      width: '100%',
      height: '70%',
      borderRadius: '10%',
    },
})