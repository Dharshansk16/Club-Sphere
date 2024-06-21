from django.db import models

#Club 
class Club(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    url = models.URLField()
    avatar = models.ImageField(upload_to="club_images/", null=True, blank = True)

    def __str__(self):
        return self.name

#Events
class Event(models.Model):
    club = models.ForeignKey(Club , related_name="events", on_delete=models.CASCADE) 
    img = models.ImageField(upload_to="event_images/", null=True , blank=True)
    name = models.CharField(max_length=200)
    description = models.TextField() 
    date = models.DateTimeField()

    class Meta:
        ordering = ["-date"]


    def __str__(self):
        return f"{self.club} | {self.name}"
    
    
