from django.db import models

class Song(models.Model):
    name = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
    img = models.ImageField()
    audio = models.FileField()
    duration = models.DurationField()

    def __str__(self):
        return self.name
