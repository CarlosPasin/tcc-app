import { store } from "../store/modules/tournament";

export function useTournament() {
  const { data, loading } = store.useState((state) => state.tournament);

  return { data, loading };
}
export function useTournaments() {
  const { list, loading } = store.useState((state) => state.tournaments);

  return { list, loading };
}
