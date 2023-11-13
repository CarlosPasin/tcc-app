export interface ITime {
  id: number;
  nome: string;
  ganhador?: boolean;
  jogadores: string[];
}

export interface ITournament {
  id: number;
  name: string;
  tournament: {
    semifinais: ITime[][];
    final: ITime[][];
  };
}
