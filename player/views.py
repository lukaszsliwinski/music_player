from django.shortcuts import render
from .models import Song

def index(request):
    songs = Song.objects.all().order_by('author')
    song_objs_list = []
    for instance in Song.objects.all().order_by('author'):
        song_objs_list.append({ 'pk' : instance.pk, 'title' : instance.title, 'author' : instance.author, 'img' : instance.img.url, 'audio' : instance.audio.url })
    context = {'songs' : songs, 'song_objs_list' : song_objs_list}
    return render(request, 'player/index.html', context)
