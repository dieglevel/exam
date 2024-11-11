import { createContext, useState } from "react";

export interface IContextData{
    title: string,
    name: string,
}

export interface IContextDataProps {
    data: IContextData,
    setData: (data: IContextData) => void
}


export const Context = createContext<IContextDataProps>({
     data: {
          title: "",
          name: "",
     },

     setData: () => {},
});