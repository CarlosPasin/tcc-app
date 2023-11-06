from django.contrib import admin
from .models import User, Player, Sport, Team, Match, Championship, Challenge, Bracket

# Register your models here.

admin.site.register(User)
admin.site.register(Player)
admin.site.register(Sport)
admin.site.register(Team)
admin.site.register(Match)
admin.site.register(Championship)
admin.site.register(Challenge)
admin.site.register(Bracket)