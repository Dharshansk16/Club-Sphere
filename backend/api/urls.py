from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from .views import ClubViewSet, EventViewSet

# Automatically Routes all the urls
router = DefaultRouter()
router.register(r'clubs', ClubViewSet)
router.register(r'events', EventViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Obtain token
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Refresh token
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),  # Verify token
]

