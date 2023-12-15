import { Store } from "pullstate";
import { ITournament } from "../../../interfaces/ITournament";

interface State {
  tournaments: {
    list?: ITournament[];
    loading: boolean;
    loadError: boolean;
  };
  tournament: {
    data?: ITournament;
    loading: boolean;
    loadError: boolean;
  };
}

const defaultState: State = {
  tournaments: {
    list: [],
    loading: false,
    loadError: false,
  },
  tournament: {
    data: undefined,
    loading: false,
    loadError: false,
  },
};

export const store = new Store(defaultState);

export const clean = () => {
  store.replace(defaultState);
};

const tournament = { store, clean, key: "@tournament" };

export default tournament;
