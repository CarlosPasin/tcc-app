import { store } from ".";
import { IUser } from "../../../interfaces/IUser";

export function refreshUser() {
  try {
    store.update((state) => {
      state.user.data = undefined;
      state.user.loading = true;
    });
    //TO-DO Service
  } catch (error) {}
}
export function SetCurrentUser(user: IUser) {
  store.update((state) => {
    /* state.user.list = user; */
    state.user.data = user;
  });
}
