import { store } from ".";
import { store as rankingStore } from "../ranking";
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

export function updateUser(id: number, name: string, username: string) {
  try {
    store.update((state) => {
      const newUser = {
        id: state.user.data!.id,
        name,
        username,
        psw: state.user.data!.psw,
        points: state.user.data!.points
      }
      state.user.data = newUser;
      
      const index = state.user.list.findIndex(item => item.id === id)
      
      if (index > -1) state.user.list[index] = newUser
    });
  } catch (error) {}
}

export function createUser(user: IUser) {
  try {
    store.update((state) => {
      state.user.list = [...state.user.list, user]
    });
    rankingStore.update((state) => {
      state.rankingPlayers.list = [...state.rankingPlayers.list!, user]
    });
    //TO-DO Service
  } catch (error) {}
}
