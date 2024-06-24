from rest_framework import serializers
from .models import Club, Event

class NestedEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = "__all__"

class ClubSerializer(serializers.ModelSerializer):
    events = NestedEventSerializer(many=True, read_only=True)

    class Meta:
        model = Club
        fields = "__all__"

class EventSerializer(serializers.ModelSerializer):
    club = ClubSerializer()

    class Meta:
        model = Event
        fields = "__all__"