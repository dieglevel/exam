import { Image, StyleSheet, Platform, View, Text, TouchableOpacity, Pressable, ScrollView } from 'react-native';

import { NavigationContainer, NavigationProp, TabRouter, useNavigation, useNavigationBuilder } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackHeaderProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/route';
import CountComponent from './hook/useReducer/countComponent';

import { Button } from 'react-native-paper';
import { createContext, useState } from 'react';



import Icon from 'react-native-vector-icons/FontAwesome';

import { Provider } from 'react-redux';
import { store } from '@/types/redux/store';
import Page1 from '../Page1';
import Page2 from '../Page2';
import Page3 from '../Page3';
import Page4 from '../Page4';


const Stack = createNativeStackNavigator<RootStackParamList>();


export default function HomeScreen() {


  return (
     <View style={{ flex: 1, marginTop: -32 }}>
        <Provider store={store}>
           <NavigationContainer independent={true}>
              <Stack.Navigator initialRouteName="Page4">
                 <Stack.Screen name="Page1" component={Page1} />
                 <Stack.Screen name="Page2" component={Page2} />
                 <Stack.Screen name="Page3" component={Page3} />
                 <Stack.Screen name="Page4" component={Page4} />
              </Stack.Navigator>
           </NavigationContainer>
        </Provider>
     </View>
  );
}


const styles = StyleSheet.create({
  component: {
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 15,
    backgroundColor: "lightgray",
  },
  main: {
    flex: 1,
    backgroundColor: "rgba(196, 196, 196, 1)",
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "rgba(196, 196, 196, 1)",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10

  },
  divImage: {
    width: 400,
    height: 250,
  },
  item: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  itemRight: {
    justifyContent: "space-between"
  },
  itemTextHeader: {
    fontSize: 12,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red"
  },
  itmPriceDiscount: {
    fontSize: 12,
    color: "gray",
    textDecorationLine: "line-through"
  },
  cart: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10
  },
  cartComponent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },
  buttonDescrete: {
    borderColor: "red",
    borderWidth: 3,
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",

  },
  buttonText: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  buyNow: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "rgba(19, 79, 236, 1)",
    fontWeight: "bold",
  },
  discountButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderWidth: 2,
    borderColor: "rgba(128, 128, 128, 1)",
    padding: 4,
    paddingRight: 50
  },
  discountIcon: {
    width: 50,
    height: 20,
    backgroundColor: "rgba(242, 221, 27, 1)"
  },
  discountText: {
    color: "red",
    fontWeight: "bold"
  },
  applyButton: {
    backgroundColor: "rgba(10, 94, 183, 1)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10
  },
  applyText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  text: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
  },
  total: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 18,
    fontWeight: "bold"
  }



  // image: {
  //   width: "100%",
  //   height: "100%",
  // },
  // circle: {
  //   borderWidth: 15,
  //   borderRadius: 100,
  //   borderColor: "black",
  //   width: 140,
  //   height: 140,
  // },
  // mainTitle: {
  //   fontSize: 25,
  //   fontWeight: "bold",
  // },
  // secondTitle: {
  //   fontSize: 15,
  //   textAlign: "center",
  //   color: "black",
  //   fontWeight: "bold",
  // },
  // button: {
  //   backgroundColor: "rgba(227, 192, 0, 1)",
  //   paddingHorizontal: 20,
  //   paddingVertical: 10,
  //   borderRadius: 10
  // },
  // buttonText: {
  //   color: "black",
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   textAlign: "center"
  // },
  // rowButton: {
  //   flexDirection: "row",
  //   gap: 30
  // }

});
