from django.db import models
from django.utils.text import slugify
from django.contrib.auth.models import User
from django.utils import timezone


#Club 
class Club(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    url = models.URLField()
    avatar = models.ImageField(upload_to="club_images/", null=True, blank = True)
    slug = models.SlugField(unique=True , default='', blank=True)
    password = models.CharField(max_length=50,default="")
    created_by = models.OneToOneField(User, related_name="club", on_delete=models.CASCADE, default="")

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)  # Generate slug from name
        super(Club, self).save(*args, **kwargs)
    
    def __str__(self):
        return self.name
    
#Events
class Event(models.Model):
    club = models.ForeignKey(Club , related_name="events", on_delete=models.CASCADE) 
    img = models.ImageField(upload_to="event_images/", null=True , blank=True)
    name = models.CharField(max_length=200)
    link = models.URLField(null=True ,blank = True)    
    description = models.TextField() 
    date = models.DateTimeField()
    venue = models.CharField(max_length=100 ,null=True)

    class Meta:
        ordering = ["-date"]
    def __str__(self):
        return f"{self.club} | {self.name}"
    
    
