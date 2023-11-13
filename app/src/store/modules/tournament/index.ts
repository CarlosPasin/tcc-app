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
    list: [
      {
        id: 1,
        name: "JOCOL",
        tournament: {
          semifinais: [
            [
              {
                id: 1,
                nome: "Time 1",
                jogadores: ["Jogador 1", "Jogador 2"],
              },
              {
                id: 2,
                nome: "Time 2",
                jogadores: ["Jogador 3", "Jogador 4"],
              },
            ],
            [
              {
                id: 3,
                nome: "Time 3",
                jogadores: ["Jogador 1", "Jogador 2"],
              },
              {
                id: 4,
                nome: "Time4",
                jogadores: ["Jogador 3", "Jogador 4"],
              },
            ],
          ],
          final: [
            [
              {
                id: 1,
                nome: "Time 1",
                jogadores: ["Jogador 1", "Jogador 2"],
              },
              {
                id: 2,
                nome: "Time 2",
                jogadores: ["Jogador 3", "Jogador 4"],
              },
            ],
          ],
        },
      },
      {
        id: 1,
        name: "Carlão",
        tournament: {
          semifinais: [
            [
              {
                id: 1,
                nome: "Timeteu",
                jogadores: ["Jogador 1", "Jogador 2"],
              },
              {
                id: 2,
                nome: "ih Ala",
                jogadores: ["Jogador 3", "Jogador 4"],
              },
            ],
            [
              {
                id: 1,
                nome: "Time do perin",
                jogadores: ["Jogador 1", "Jogador 2"],
              },
              {
                id: 2,
                nome: "Time dos alunos",
                jogadores: ["Jogador 3", "Jogador 4"],
              },
            ],
          ],
          final: [
            [
              {
                id: 1,
                nome: "ih ala",
                jogadores: ["Jogador 1", "Jogador 2"],
              },
              {
                id: 2,
                nome: "Time dos alunos",
                jogadores: ["Jogador 3", "Jogador 4"],
              },
            ],
          ],
        },
      },
    ],
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
