from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Club, Event

class NestedEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = "__all__"

class ClubSerializer(serializers.ModelSerializer):
    events = NestedEventSerializer(many=True, read_only=True)
    created_by = serializers.ReadOnlyField(source='created_by.username')

    class Meta:
        model = Club
        fields = "__all__"

class EventSerializer(serializers.ModelSerializer):
    club = ClubSerializer()

    class Meta:
        model = Event
        fields = "__all__"

class UserSerializer(serializers.ModelSerializer):
    club = ClubSerializer(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', "club"]