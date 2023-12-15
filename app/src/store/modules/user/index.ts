import { Store } from "pullstate";
import { ITournament } from "../../../interfaces/ITournament";
import { IUser } from "../../../interfaces/IUser";

interface State {
  user: {
    list: IUser[];
    data?: IUser;
    loading: boolean;
    loadError: boolean;
  };
}

const defaultState: State = {
  user: {
    list: [
        { id: 3, name: "Christopher", points: 75, username: 'chris', psw: '1234' },
    ],
    loadError: false,
    loading: false,
  },
};

export const store = new Store(defaultState);

export const clean = () => {
  store.replace(defaultState);
};

const user = { store, clean, key: "@user" };

export default user;
