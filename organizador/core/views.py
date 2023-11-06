from django.http import HttpResponse, JsonResponse
from rest_framework import viewsets, generics, mixins, status
from rest_framework.views import APIView
from rest_framework.response import Response
import json
from rest_framework.decorators import action, api_view
from .serializers import UserSerializer, PlayerSerializer, SportSerializer, TeamSerializer, MatchSerializer, ChampionshipSerializer, ChallengeSerializer, BracketSerializer
from .models import User, Player, Sport, Team, Match, Championship, Challenge, Bracket

# Create your views here.

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    @action(detail=False, methods=['get'])
    def getUsers(self, request):
        users = User.objects.all()
        response = UserSerializer(users, many=True)
        return Response({
                        'success' : True,
                        'users' : response.data})
    
    @action(detail=True, methods=['get']) 
    def getUser(self, request, pk):
        user = User.objects.filter(id=pk)
        response = UserSerializer(user, many=True)
        return Response({
                        'success' : True,
                        'user' : response.data})
    
class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer
    
    @action(detail=False, methods=['get'])
    def getPlayers(self, request):
        players = Player.objects.all()
        response = PlayerSerializer(players, many=True)
        return Response({
                        'success' : True,
                        'players' : response.data})
    
    @action(detail=True, methods=['get']) 
    def getPlayer(self, request, pk):
        player = Player.objects.filter(id=pk)
        response = PlayerSerializer(player, many=True)
        return Response({
                        'success' : True,
                        'player' : response.data})
    
    @action(detail=True, methods=['put'])
    def addThreePoints(self, request, pk):
        player = Player.objects.filter(id=pk).first()
        player.points += 3
        player.save()
        response = PlayerSerializer(player, many=True)
        return Response({
                        'success' : True,
                        'player' : response.data})
    
    @action(detail=True, methods=['put'])
    def addFivePoints(self, request, pk):
        player = Player.objects.filter(id=pk).first()
        player.points += 5
        player.save()
        response = PlayerSerializer(player, many=True)
        return Response({
                        'success' : True,
                        'player' : response.data})

class SportViewSet(viewsets.ModelViewSet):
    queryset = Sport.objects.all()
    serializer_class = SportSerializer
    
    @action(detail=False, methods=['get'])
    def getSports(self, request):
        sport = Sport.objects.all()
        response = SportSerializer(sport, many=True)
        return Response({
                        'success' : True,
                        'sport' : response.data})
    
    @action(detail=True, methods=['get']) 
    def getSport(self, request, pk):
        sport = Sport.objects.filter(id=pk)
        response = SportSerializer(sport, many=True)
        return Response({
                        'success' : True,
                        'sport' : response.data})
    
    @action(detail=True, methods=['get'])
    def getRanking(self, request, pk):
        players = Player.objects.filter(sport=pk)
        sortedPlayers = sorted(players, key=lambda x: x.points, reverse=True)
        response = PlayerSerializer(sortedPlayers, many=True)
        return Response({
                        'success' : True,
                        'players' : response.data})
    

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
    
    @action(detail=False, methods=['get'])
    def getTeams(self, request):
        team = Team.objects.all()
        response = TeamSerializer(team, many=True)
        return Response({
                        'success' : True,
                        'team' : response.data})
    
    @action(detail=True, methods=['get']) 
    def getTeam(self, request, pk):
        team = Team.objects.filter(id=pk)
        response = TeamSerializer(team, many=True)
        return Response({
                        'success' : True,
                        'team' : response.data})
    
class MatchViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all()
    serializer_class = MatchSerializer
    
    @action(detail=False, methods=['get'])
    def getMatches(self, request):
        matches = Match.objects.all()
        response = MatchSerializer(matches, many=True)
        return Response({
                        'success' : True,
                        'matches' : response.data})
    
    @action(detail=True, methods=['get']) 
    def getMatch(self, request, pk):
        match = Match.objects.filter(id=pk)
        response = MatchSerializer(match, many=True)
        return Response({
                        'success' : True,
                        'match' : response.data})


class ChampionshipViewSet(viewsets.ModelViewSet):
    queryset = Championship.objects.all()
    serializer_class = ChampionshipSerializer
    
    @action(detail=False, methods=['get'])
    def getChampionships(self, request):
        championship = Championship.objects.all()
        response = ChampionshipSerializer(championship, many=True)
        return Response({
                        'success' : True,
                        'championship' : response.data})
    
    @action(detail=True, methods=['get']) 
    def getChampionship(self, request, pk):
        championship = Championship.objects.filter(id=pk)
        response = ChampionshipSerializer(championship, many=True)
        return Response({
                        'success' : True,
                        'championship' : response.data})
    
    #Deve ta quebrado ver dps
    @action(detail=True, methods=['get'])
    def createBrackets(self, request, pk):
        championship = Championship.objects.filter(id=pk).first()
        teams = championship.teams.all()
        teamsCount = teams.count
        oitavas = True if teamsCount/2 == 4 else False

        bracket = Bracket()
        championship.bracket = bracket
        championship.save()

        for x in range(teamsCount/2):
            team1 = Team.objects.filter(id=1)
            team2 = Team.objects.filter(id=2)
            match = Match()
            match.save()
            match.teams.add(team1)
            match.teams.add(team2)

            if(oitavas):
                bracket.roundOfSixteen.add(match)
            else:
                bracket.semiFinals.add(match)

        championship.save()
        response = ChampionshipSerializer(championship)
        return Response({
                        'success': True,
                        'bracket': response.data
        })
    
    #Ta quebrado ver dps
    @action(detail=True, methods=['post'])
    def updateBracketQuarterFinals(self, request, pk):
        championship = Championship.objects.filter(id=pk).first()
        bracket = championship.bracket

        for i in range(4):
            match = bracket.quarterFinals
            if(match.winner != None):
                j = i
                if(i / 2 == 0):
                    j = i % 2
                if(bracket.semiFinals[j].teams.count != 2):
                    newMatch = Match()
                    newMatch.teams.add(match.winner)
                    bracket.semiFinals[j].add(newMatch)

    #Ta quebrado ver dps
    @action(detail=True, methods=['post'])
    def updateBracketSemiFinals(self, request, pk):
        championship = Championship.objects.filter(id=pk).first()
        bracket = championship.bracket.objects.first()

        for i in range(2):
            match = bracket.semiFinals[i]
            if(match.winner != None):
                if(bracket.finals.teams.count != 2):
                    newMatch = Match()
                    newMatch.teams.add(match.winner)
                    bracket.finals.add(newMatch)

    
class ChallengeViewSet(viewsets.ModelViewSet):
    queryset = Challenge.objects.all()
    serializer_class = ChallengeSerializer
    
    @action(detail=False, methods=['get'])
    def getChallenges(self, request):
        challenges = Challenge.objects.all()
        response = ChallengeSerializer(challenges, many=True)
        return Response({
                        'success' : True,
                        'challenges' : response.data})
    
    @action(detail=True, methods=['get']) 
    def getChallenge(self, request, pk):
        challenge = Challenge.objects.filter(id=pk)
        response = ChallengeSerializer(challenge, many=True)
        return Response({
                        'success' : True,
                        'challenge' : response.data})
    
    #Ta quebrado ver dps
    @action(detail=True, methods=['put']) 
    def ExchangePlayersPoints(self, request, pk):
        challenge = Challenge.objects.filter(id=pk).first()
        player1 = challenge.players.first()
        player2 = challenge.players.last()
        winnerId = challenge.winner.pk
        newPoints = 1

        if(player1.id != winnerId):
            newPoints = player1.points
            player1.points = player2.points
            player2.points = newPoints
        else:
            newPoints = player2.points
            player2.points = player1.points
            player1.points = newPoints

        player1.save()
        player2.save()

        return Response({'success' : True})


class BracketViewSet(viewsets.ModelViewSet):
    queryset = Bracket.objects.all()
    serializer_class = BracketSerializer
    
    @action(detail=False, methods=['get'])
    def getBrackets(self, request):
        brackets = Bracket.objects.all()
        response = BracketSerializer(brackets, many=True)
        return Response({
                        'success' : True,
                        'challenges' : response.data})
    
    @action(detail=True, methods=['get']) 
    def getBracket(self, request, pk):
        bracket = Bracket.objects.filter(id=pk)
        response = BracketSerializer(bracket, many=True)
        return Response({
                        'success' : True,
                        'challenge' : response.data})