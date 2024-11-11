import { IData } from "@/app/(tabs)/lab_5/API_Screen_2";
import { ITodo } from "./redux/reduxs/todoRedux";

type RootStackParamList = {
     Page1: undefined;
    
}

declare global {
     namespace ReactNavigation {
          interface RootParamList
               extends RootStackParamList {}
     }
}

export type HomeScreenNavigationProp =
     NativeStackNavigationProp<
          RootStackParamList
     >;
export type HomeScreenRouteProp = RouteProp<
     RootStackParamList
>;
