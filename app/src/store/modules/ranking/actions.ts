import { store } from ".";
import { IRanking, IRankingPlayer } from "../../../interfaces/IRanking";

export function refreshRanking() {
  try {
    store.update((state) => {
      state.rankingPlayers.list = undefined;
      state.rankingPlayers.loading = true;
    });
    //TO-DO Service
  } catch (error) {}
}
export function SetCurrentRanking(ranking: IRanking) {
  store.update((state) => {
    /* state.rankingPlayers.list = rankingPlayers; */
    state.rankingPlayers.data = ranking;
  });
}
