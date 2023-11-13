import { store } from "../store/modules/user";

export function useUser() {
  const { data, loading } = store.useState((state) => state.user);

  return { data, loading };
}
