from django.urls import path
from . import views


urlpatterns = [
    path('post-user/', views.post_user, name='post_user'),
    path('get-user/', views.get_user, name='get_user'),

    path('post-foodtruck/', views.post_foodtruck, name='post_foodtruck'),
    path('get-foodtruck/', views.get_foodtruck, name='get_foodtruck'),

    path('post-review/', views.post_review, name='post_review'),
    path('get-review/', views.get_review, name='get_review'),
]
