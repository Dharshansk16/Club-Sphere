from django.shortcuts import render
from .serializers import ClubSerializer , EventSerializer
from rest_framework  import viewsets
from .models import Club , Event

# Create your views here.

class ClubViewSet(viewsets.ModelViewSet):
    queryset = Club.objects.all()
    serializer_class = ClubSerializer


class EventViewSet(viewsets.ModelViewSet):
    queryset =Event.objects.all()
    serializer_class= EventSerializer

