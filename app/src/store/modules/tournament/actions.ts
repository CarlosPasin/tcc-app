import { store } from ".";
import { store as rankingStore } from '../ranking/index'
import { store as userStore } from '../user/index'
import { ITime, ITournament } from "../../../interfaces/ITournament";

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

export function createFinal(semis: ITime[][], teams: ITime[][]) {
  try {
    store.update((state) => {
      const currentTournament = state.tournament.data
      const tournamentIndex = state.tournaments.list?.findIndex((item) => item.id === currentTournament?.id)
      if (tournamentIndex! > -1) {
        state.tournaments.list![tournamentIndex!].tournament.semifinais = semis
        state.tournaments.list![tournamentIndex!].tournament.final = teams
        const [teamA, teamB] = teams[0]
        rankingStore.update((state) => {
          const indexA = state.rankingPlayers.list!.findIndex(item => item.id === teamA.id)
          if (indexA > -1) {
            state.rankingPlayers.list![indexA!].points = state.rankingPlayers.list![indexA!].points + 3
          }
          const indexB = state.rankingPlayers.list!.findIndex(item => item.id === teamB.id)
          if (indexB > -1) {
            state.rankingPlayers.list![indexB!].points = state.rankingPlayers.list![indexB!].points + 3
          }
        })
        state.tournament.data!.tournament.final = teams;
      }
    });
    //TO-DO Service
  } catch (error) {}
}

export function setChampion(team: ITime) {
  try {
    store.update((state) => {
      const currentTournament = state.tournament.data
      const tournamentIndex = state.tournaments.list?.findIndex((item) => item.id === currentTournament?.id)
      if (tournamentIndex! > -1) {
        const champion = state.tournaments.list![tournamentIndex!].tournament.final[0].findIndex(item => item.id === team.id)
        if (champion > -1) {
          state.tournaments.list![tournamentIndex!].tournament.final[0][champion].ganhador = true
          state.tournament.data!.tournament.final[0][champion].ganhador = true;
          if (champion > 0) {
            state.tournaments.list![tournamentIndex!].tournament.final[0][0].ganhador = false
            state.tournament.data!.tournament.final[0][0].ganhador = false;
          } else {
            state.tournaments.list![tournamentIndex!].tournament.final[0][1].ganhador = false
            state.tournament.data!.tournament.final[0][1].ganhador = false;
          }
        }
        rankingStore.update((state) => {
          const index = state.rankingPlayers.list!.findIndex(item => item.id === team.id)
          if (index > -1) {
            state.rankingPlayers.list![index!].points = state.rankingPlayers.list![index!].points + 5
          }
        })
      }
    });
    //TO-DO Service
  } catch (error) {}
}