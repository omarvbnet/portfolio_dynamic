from django.urls import path
from .views import getComments ,PostComment


urlpatterns = [
    path('get', getComments.as_view()),
    path('post', PostComment.as_view()),
]
