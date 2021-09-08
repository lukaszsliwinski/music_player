from django.shortcuts import render
from .models import Song

def index(request):
    songs = Song.objects
    return render(request, 'player/index.html', {'songs': songs})
