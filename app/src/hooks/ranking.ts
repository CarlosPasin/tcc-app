import { store } from "../store/modules/ranking";

export function useRankingPlayers() {
  const { list, data, loading } = store.useState(
    (state) => state.rankingPlayers
  );

  return { list, data, loading };
}
export function useRankings() {
  const { list, loading } = store.useState((state) => state.rankings);

  return { list, loading };
}
