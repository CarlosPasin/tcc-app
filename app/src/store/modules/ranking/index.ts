import { Store } from "pullstate";
import { ITournament } from "../../../interfaces/ITournament";
import { IRanking, IRankingPlayer } from "../../../interfaces/IRanking";

interface State {
  rankings: {
    list?: IRanking[];
    loading: boolean;
    loadError: boolean;
  };
  rankingPlayers: {
    list?: IRankingPlayer[];
    data?: IRanking;
    loading: boolean;
    loadError: boolean;
  };
}

const defaultState: State = {
  rankings: {
    list: [
      { id: 1, name: "Tênis", qtd: 15 },
      { id: 2, name: "Futebol", qtd: 28 },
    ],
    loadError: false,
    loading: false,
  },
  rankingPlayers: {
    list: [
      { id: 1, name: "Christopher", points: 100 },
      { id: 2, name: "Perin", points: 95 },
      { id: 3, name: "Carlos", points: 75 },
      { id: 4, name: "André", points: 25 },
      { id: 5, name: "Pinheiro", points: 18 },
      { id: 6, name: "Christopher2", points: 100 },
      { id: 7, name: "Perin2", points: 95 },
      { id: 8, name: "Carlos2", points: 75 },
    ],
    data: undefined,
    loadError: false,
    loading: false,
  },
};

export const store = new Store(defaultState);

export const clean = () => {
  store.replace(defaultState);
};

const ranking = { store, clean, key: "@ranking" };

export default ranking;
