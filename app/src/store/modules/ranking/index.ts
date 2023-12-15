import { Store } from "pullstate";
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
      { id: 1, name: "Tênis", qtd: 9 },
      { id: 2, name: "Squash", qtd: 9 },
      { id: 3, name: "Paddle", qtd: 9 },
      { id: 4, name: "Tênis de mesa", qtd: 9 },
      { id: 5, name: "Beach tennis", qtd: 9 },
    ],
    loadError: false,
    loading: false,
  },
  rankingPlayers: {
    list: [
      { id: 1, name: "Carlos", points: 100 },
      { id: 2, name: "Perin", points: 90 },
      { id: 3, name: "Christopher", points:  70},
      { id: 4, name: "André", points: 20 },
      { id: 5, name: "Pinheiro", points: 10 },
      { id: 6, name: "Eduarda", points: 50 },
      { id: 7, name: "Helena", points: 95 },
      { id: 8, name: "Felipe", points: 73 },
    ].slice().sort((a, b) => { return b.points - a.points; }),
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
