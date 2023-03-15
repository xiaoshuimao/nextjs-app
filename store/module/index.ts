import userStore, { IUserStore } from './user'

// export interface IStore  {
//   user: IUserStore,
// }




const createStore = (initialValue?: Record<any, any>) => {
  return () => {
    return {
      user: { ...userStore(), }
    }
  }
}

export default createStore;