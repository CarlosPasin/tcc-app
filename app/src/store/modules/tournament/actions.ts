import { store } from ".";
import { ITournament } from "../../../interfaces/ITournament";

export function refreshTournament() {
  try {
    store.update((state) => {
      state.tournament.data = undefined;
      state.tournament.loading = true;
    });
    //TO-DO Service
  } catch (error) {}
}
export function addTournament(tournament: ITournament) {
  try {
    store.update((state) => {
      state.tournaments.list = state.tournaments.list
        ? [tournament, ...state.tournaments.list]
        : [tournament];
      state.tournaments.loading = true;
    });
    //TO-DO Service
  } catch (error) {}
}
export function SetCurrentTournament(tournament: ITournament) {
  store.update((state) => {
    state.tournament.data = tournament;
  });
}
