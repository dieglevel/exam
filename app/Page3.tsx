import { Product } from "@/types/Product";
import { HomeScreenRouteProp, RootStackParamList } from "@/types/route";
import { useRoute } from "@react-navigation/native";
import { Image, Pressable, Text, View } from "react-native";
const image = {
   xe1: require("../assets/images/Xe1.png"),
   xe2: require("../assets/images/Xe2.png"),
   xe3: require("../assets/images/Xe3.png"),
   xe4: require("../assets/images/Xe4.png"),
   xe5: require("../assets/images/Xe5.png"),
   xe6: require("../assets/images/Xe6.png"),
};

const Page3 = () => {
    const route = useRoute < HomeScreenRouteProp>();
    const data: Product = route.params?.data
    
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
       <Pressable
          style={{
             backgroundColor: "#F7BA8326",
             padding: 20,
             borderRadius: 16,
             margin: 10,

          }}
       >
          <Image
             source={checkImage(data.image)}
             style={{ width: 110, height: 100 }}
          ></Image>
          <Text style={{ fontWeight: "bold", fontSize: 32, color: "gray" }}>
             {data.name}
          </Text>
          <View style={{ flexDirection: "row" }}>
             <Text style={{ color: "orange" }}>$ </Text>
             <Text>{data.price}</Text>
          </View>
          <View>
             <Text style={{ fontWeight: "bold", fontSize: 32, color: "gray" }}>
                Description
             </Text>
             <Text>{data.description}</Text>
          </View>
          <Pressable
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
                Add to cart
             </Text>
          </Pressable>
       </Pressable>
    );
}
 
export default Page3;