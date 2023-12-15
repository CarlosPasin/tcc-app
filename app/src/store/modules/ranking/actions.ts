import { store } from ".";
import { IRanking, IRankingPlayer } from "../../../interfaces/IRanking";
import { IUser } from "../../../interfaces/IUser";

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

export function updateRanking(user: IUser, challenged: IUser) {
  try {
    const a = user
    const b = challenged
    store.update((state) => {
      const currentUser = state.rankingPlayers.list?.findIndex((item) => user.id === item.id)
      if (currentUser! > -1) {
        state.rankingPlayers!.list![currentUser!].points = challenged.points;
      }
      const challengedUser = state.rankingPlayers.list?.findIndex((item) => challenged.id === item.id)
      if (challengedUser! > -1) {
        state.rankingPlayers!.list![challengedUser!].points = user.points;
      }
      state.rankingPlayers.list = state.rankingPlayers.list?.slice().sort((a, b) => { return b.points - a.points; })
    });
    //TO-DO Service
  } catch (error) {}
}

