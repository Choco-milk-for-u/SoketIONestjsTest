import { createContext } from "react";

export interface IContext{
    soket: any,
    setSoket: Function
}
const initial: IContext = {
    soket: null,
    setSoket: ()=>{}
}
export const MainContext = createContext(initial);