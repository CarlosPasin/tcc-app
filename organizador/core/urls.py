from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('user', views.UserViewSet)
router.register('player', views.PlayerViewSet)
router.register('sport', views.SportViewSet)
router.register('team', views.TeamViewSet)
router.register('match', views.MatchViewSet)
router.register('championship', views.ChampionshipViewSet)
router.register('challenge', views.ChallengeViewSet)
router.register('bracket', views.BracketViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('index', views.index)
]