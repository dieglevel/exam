import {
     createSlice,
     PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ITodo {
     id: string;
     title: string;
     isChecked: boolean;
}

const initialState: ITodo[] = [
     {
          id: "1",
          title: "Todo 1",
          isChecked: false,
     },
     {
          id: "2",
          title: "Todo 2",
          isChecked: true,
     },
     {
          id: "3",
          title: "Todo 3",
          isChecked: false,
     },
     {
          id: "4",
          title: "Todo 4",
          isChecked: true,
     },
     {
          id: "5",
          title: "Todo 5",
          isChecked: false,
     },
     {
          id: "6",
          title: "Todo 6",
          isChecked: false,
     },
     {
          id: "7",
          title: "Todo 7",
          isChecked: true,
     },
     {
          id: "8",
          title: "Todo 8",
          isChecked: false,
     },
     {
          id: "9",
          title: "Todo 9",
          isChecked: false,
     },
     {
          id: "10",
          title: "Todo 10",
          isChecked: false,
     },
     {
          id: "11",
          title: "Todo 11",
          isChecked: false,
     },
     {
          id: "12",
          title: "Todo 12",
          isChecked: false,
     },
     {
          id: "13",
          title: "Todo 13",
          isChecked: false,
     },
     {
          id: "14",
          title: "Todo 14",
          isChecked: false,
     },
     {
          id: "15",
          title: "Todo 15",
          isChecked: false,
     },
     {
          id: "16",
          title: "Todo 16",
          isChecked: false,
     },
     {
          id: "17",
          title: "Todo 17",
          isChecked: false,
     },
     {
          id: "18",
          title: "Todo 18",
          isChecked: false,
     },
     {
          id: "19",
          title: "Todo 19",
          isChecked: false,
     },
     {
          id: "20",
          title: "Todo 20",
          isChecked: false,
     },
];

//

const todoRedux = createSlice({
     name: "todo",
     initialState: {
          value: initialState,
     },
     reducers: {
          add: (
               state,
               action: PayloadAction<ITodo>
          ) => {
               state.value.push(action.payload);
          },
          updateCheck: (
               state,
               action: PayloadAction<ITodo>
          ) => {
               // update isChecked
               state.value = state.value.map(
                    (item) => {
                         if (
                              item.id ===
                              action.payload.id
                         ) {
                              return {
                                   ...item,
                                   isChecked:
                                        !item.isChecked,
                              };
                         }
                         return item;
                    }
               );
          },
          remove: (
               state,
               action: PayloadAction<ITodo>
          ) => {
               state.value = state.value.filter(
                    (item) =>
                         item.id !==
                         action.payload.id
               );
          },
          updateTitle: (
               state,
               action: PayloadAction<{
                    id: string;
                    title: string;
               }>
          ) => {
               state.value = state.value.map(
                    (item) => {
                         if (
                              item.id ===
                              action.payload.id
                         ) {
                              return {
                                   ...item,
                                   title: action
                                        .payload
                                        .title,
                              };
                         }
                         return item;
                    }
               );
          },
     },
});

export const todo = (state: RootState) =>
     state.todo;
export const {
     add,
     updateTitle,
     updateCheck,
     remove,
} = todoRedux.actions;

export default todoRedux.reducer;
