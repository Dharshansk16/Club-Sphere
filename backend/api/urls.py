from django.urls import path ,include
from .views import ClubViewSet , EventViewSet
from rest_framework.routers import DefaultRouter

#Automatically Routes all the urls
router = DefaultRouter()
router.register(r'clubs', ClubViewSet)
router.register(r'events', EventViewSet)


urlpatterns = [
    path('', include(router.urls)),
]