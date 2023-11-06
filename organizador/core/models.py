from django.db import models

# Create your models here.

class User(models.Model):
    login = models.CharField('login', max_length=90)
    password = models.CharField('password', max_length=90)
    name = models.CharField('name', max_length=90)
    email = models.CharField('email', max_length=90)
    phone = models.CharField('phone', max_length=90)
	
class Sport(models.Model):
	name = models.CharField('name', max_length=90)

class Player(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True)
	points = models.IntegerField()
	sport = models.ForeignKey(Sport, on_delete=models.CASCADE, blank=True)
	
class Team(models.Model):
    name = models.CharField('name', max_length=90)
    players = models.ManyToManyField(Player, related_name="playerTeam", blank=True)
	
class Match(models.Model):
	teams = models.ManyToManyField(Team, related_name="teamsMatch", blank=True)
	winner = models.ForeignKey(Team, on_delete=models.CASCADE, blank=True)

class Bracket(models.Model):
	quarterFinals = models.ManyToManyField(Match, related_name="quarterMatch", blank=True)
	semiFinals = models.ManyToManyField(Match, related_name="semiMatch", blank=True)
	finals = models.ManyToManyField(Match, related_name="finalMatch", blank=True)

class Championship(models.Model):
    name = models.CharField('name', max_length=90)
    admin = models.ForeignKey(User, on_delete=models.DO_NOTHING, blank=True)
    sport = models.ForeignKey(Sport, on_delete=models.DO_NOTHING, blank=True)
    teams = models.ManyToManyField(Team, related_name="teamsChampionship", blank=True)
    bracket = models.ForeignKey(Bracket, on_delete=models.CASCADE, blank=True)
	
class Challenge(models.Model):
	players = models.ManyToManyField(Player, related_name="playersChallenge", blank=True)
	winner = models.ForeignKey(Player, on_delete=models.CASCADE, blank=True)
	

    