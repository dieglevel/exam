import { Image, Pressable, Text, View } from "react-native";

export const Page1 = () => {
    return (
       <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
       >
          <Text
             style={{ fontWeight: "bold", fontSize: 24, textAlign: "center" }}
          >
             A premium online store for sporter and their stylish choice
          </Text>
          <View style={{ padding: 80 }}>
             <Image
                source={require("../assets/images/Xe1.png")}
                style={{
                   borderRadius: 16,
                   backgroundColor: "#E941411A",
                   width: 300,
                   height: 300,
                }}
             ></Image>
          </View>
          <Text
             style={{ fontWeight: "bold", fontSize: 24, textAlign: "center" }}
          >
             POWER BIKE SHOP
          </Text>
          <Pressable style={{ backgroundColor: "#E94141", paddingHorizontal: 32, paddingVertical: 8, borderRadius: 16, }}>
             <Text
                style={{
                   fontWeight: "bold",
                   fontSize: 24,
                   textAlign: "center",
                   color: "white"
                }}
             >
                Get Started
             </Text>
          </Pressable>
       </View>
    );
}
 
export default Page1;