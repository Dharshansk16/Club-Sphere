from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Club, Event
from .serializers import ClubSerializer, EventSerializer, UserSerializer
from .permissions import IsOwnerOrReadOnly, IsClubOrReadOnly
from rest_framework.exceptions import ValidationError
from django.shortcuts import get_object_or_404

class ClubViewSet(viewsets.ModelViewSet):
    queryset = Club.objects.all()
    serializer_class = ClubSerializer
    lookup_field = 'slug'
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        if Club.objects.filter(created_by=self.request.user).exists():
            raise ValidationError('You can only create one club.')
        serializer.save(created_by=self.request.user)

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes= [permissions.IsAuthenticatedOrReadOnly , IsClubOrReadOnly]

    def perform_create(self, serializer):
        club_slug = self.request.data.get('club')
        club = get_object_or_404(Club, slug=club_slug)
        serializer.save(club=club)
    


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    @action(detail=False, methods=['get'])
    def current_user(self, request):
        serializer = self.get_serializer(request.user)
        return Response(serializer.data)
