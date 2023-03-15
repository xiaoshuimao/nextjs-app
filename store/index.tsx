import { useLocalObservable, enableStaticRendering } from "mobx-react-lite";
import React, { createContext, ReactNode, useContext } from "react";
import createStore from './module'


enableStaticRendering(typeof window === 'undefined')

const StoreContext = createContext({})
type IStore = ReturnType<ReturnType<typeof createStore>>

type Props = {
  initialValue?: Record<any, any>;
  children?: ReactNode
}
export const StoreProvider: React.FC<Props> = ({ initialValue, children }) => {
  const store = useLocalObservable(createStore(initialValue))
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export const useStore = () => {
  const store = useContext(StoreContext) as IStore;
  if (!store) throw new Error('store数据不存在')
  return store;
}
