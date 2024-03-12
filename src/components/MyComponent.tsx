import { useStore } from "../store/StoreProvider";

export const MyComponent = () => {
  const store = useStore();
  
  return (
    <div>
      {store.authStore.isAuth ? 'auhtorized' : 'not authorized'}
    </div>
  )
}