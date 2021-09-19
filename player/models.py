from django.db import models

class Song(models.Model):
    title = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
    img = models.ImageField(blank=True, null=True)
    audio = models.FileField()

    def __str__(self):
        return self.title
