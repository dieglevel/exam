import { useReducer } from "react";
import {  Text, View } from "react-native";
import {initialState, reducer } from "./countDefine";
import { Button } from "react-native-paper";

const CountComponent = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return ( 
        <View>
            <Text>Count: {state.count}</Text>
            <Button  onPress={() => dispatch({ type: "increment" })}>Increment</Button>
            <Button  onPress={() => dispatch({ type: "decrement" })}>Decrement</Button>
        </View>
     );
}
 
export default CountComponent;