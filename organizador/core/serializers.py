from rest_framework import serializers
from .models import User, Player, Sport, Team, Match, Championship, Challenge, Bracket

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = "__all__"

class SportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sport
        fields = "__all__"

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = "__all__"

class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = "__all__"

class ChampionshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Championship
        fields = "__all__"

class ChallengeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Challenge
        fields = "__all__"

class BracketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bracket
        fields = "__all__"