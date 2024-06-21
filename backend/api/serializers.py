from rest_framework import serializers
from .models import Club, Event


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event 
        fields = "__all__"


class ClubSerializer(serializers.ModelSerializer):
    events = EventSerializer(many=True, read_only=True)

    class Meta:
        model = Club
        fields = "__all__"