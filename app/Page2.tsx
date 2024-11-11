import { Product } from "@/types/Product";
import {
   productsStore,
   setProducts,
} from "@/types/redux/reduxs/productsStotre";
import { HomeScreenNavigationProp } from "@/types/route";
import { useAppDispatch, useAppSelector } from "@/types/typeRedux";
import axios from "axios";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const image = {
   xe1: require("../assets/images/Xe1.png"),
   xe2: require("../assets/images/Xe2.png"),
   xe3: require("../assets/images/Xe3.png"),
   xe4: require("../assets/images/Xe4.png"),
   xe5: require("../assets/images/Xe5.png"),
   xe6: require("../assets/images/Xe6.png"),
};

export const Page2 = () => {
   const data = useAppSelector(productsStore);
   const dispatch = useAppDispatch();

   const navigation = useNavigation<HomeScreenNavigationProp>();

   useEffect(() => {
      const getdata = async () => {
         const response = await axios.get(
            "https://6703aa81ab8a8f8927311ee8.mockapi.io/products"
         );
         return response.data;
      };
      getdata().then((data) => {
         dispatch(setProducts(data));
      });
   }, [dispatch]);

   return (
      <View
         style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
      >
         <Pressable
         onPress={() => navigation.navigate("Page4")}
            style={{
               backgroundColor: "red",
               padding: 10,
               borderRadius: 10,
               margin: 10,
            }}
         >
            <Text
               style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
               }}
            >
               Add new products
            </Text>
         </Pressable>
         <View>
            <Text
               style={{
                  fontWeight: "bold",
                  fontSize: 24,
                  textAlign: "center",
               }}
            >
               The world’s Best Bike
            </Text>
            <View
               style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: 10,
               }}
            >
               <Text
                  style={{
                     color: "red",
                     borderWidth: 1,
                     paddingHorizontal: 30,
                  }}
               >
                  All
               </Text>
               <Text
                  style={{
                     color: "red",
                     borderWidth: 1,
                     paddingHorizontal: 30,
                  }}
               >
                  Roadbike
               </Text>
               <Text
                  style={{
                     color: "red",
                     borderWidth: 1,
                     paddingHorizontal: 30,
                  }}
               >
                  Mountain
               </Text>
            </View>
         </View>

         {/* ITEM */}
         <FlatList
            data={data.value}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Item data={item}></Item>}
            numColumns={2}
         ></FlatList>
      </View>
   );
};

interface ItemProps {
   data: Product;
}

const Item = ({ data }: ItemProps) => {
   const navigation = useNavigation<HomeScreenNavigationProp>();
   
   const checkImage = (images: string) => {
      switch (images) {
         case "1":
            return image.xe1;
         case "2":
            return image.xe2;
         case "3":
            return image.xe3;
         case "4":
            return image.xe4;
         case "5":
            return image.xe5;
         case "6":
            return image.xe6;
         default:
            return image.xe1;
      }
   };
   return (
      <Pressable onPress={() => navigation.navigate("Page3", { data })}
         style={{ width: "45%", backgroundColor: "#F7BA8326", padding: 20, borderRadius: 16, margin: 10 }}
      >
         <Image source={checkImage(data.image) } style={{ width: 110, height: 100 }}></Image>
         <Text style={{ fontWeight: "bold", fontSize: 32, color: "gray" }}>
            {data.name}
         </Text>
         <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "orange" }}>$ </Text>
            <Text>{data.price}</Text>
         </View>
      </Pressable>
   );
};

export default Page2;
