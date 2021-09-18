from django.shortcuts import render
from .models import Song

def index(request):
    songs = Song.objects.all().order_by('author')
    song_objs_list = []
    for instance in Song.objects.all().order_by('author'):
        song_objs_list.append({ 'pk' : instance.pk,
                                'title' : instance.title,
                                'author' : instance.author,
                                'img' : instance.img.url, 
                                'audio' : instance.audio.url
                                })

    # numbered_songs list is used in template to pass song id from playlist into playFromPlaylist() function as parameter
    # and number songs on playlist starting from 1 (increased_nums list)
    song_nums = []
    for i in range(len(songs)):
        song_nums.append(i)
    increased_nums = [num + 1 for num in song_nums]
    numbered_songs = zip(songs, song_nums, increased_nums)
    context = {'songs' : songs, 'song_objs_list' : song_objs_list, "numbered_songs" : numbered_songs}
    return render(request, 'player/index.html', context)
