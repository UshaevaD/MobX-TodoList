import { createContext, FC, ReactNode, ReactElement, useContext } from "react";
import { IRootStore, RootStore } from "./stores/rootStore";

let store: IRootStore;

export const StoreContext = createContext<IRootStore>({} as IRootStore);

export type StoreComponent = FC<{
  children: ReactNode
}>;

export const StoreProvider: StoreComponent = ({
  children
}): ReactElement => {
  const root = store ?? new RootStore();

  return (
    <StoreContext.Provider value={root}>{children}</StoreContext.Provider>
  )
}

export const useStore = () => {
  const context = useContext(StoreContext);

  if(context === null) {
    throw new Error(
      "Store cannot be null, please add a context provider"
    );
  }

  return context;
}

// export const withStore = (Component: ReactElement) => (props) => {
//   return <Component {...props} store={useStore()} />
// }