import { HomeScreenNavigationProp } from "@/types/route";
import axios from "axios";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";


const Page4 = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    
    const dispatch = useDispatch();

    const navigation = useNavigation<HomeScreenNavigationProp>();

    const save = () => {
        axios
           .post("https://6703aa81ab8a8f8927311ee8.mockapi.io/products", {
              name,
              description,
              price: parseFloat(price),
              type: "Roadbike",
           })
           .then((response) => {
              dispatch({
                 type: "ADD_PRODUCT",
                 product: response.data,
              });
              navigation.navigate("Page2");
           });
    }

    return (
       <View>
          <TextInput value={name} label={"name"} onChangeText={setName}/>
          <TextInput onChangeText={setDescription} value={description} label={"description"} />
          <TextInput onChangeText={setPrice} value={price} label={"price"} />

          <Pressable
          onPress={save}
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
                Add
             </Text>
          </Pressable>
       </View>
    );
}
 
export default Page4;