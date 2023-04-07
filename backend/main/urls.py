from django.urls import path
from . import views


urlpatterns = [
    path('', views.main_view, name='main_view'),
    path('splash/', views.splash_view, name = 'splash_view'),
    path('login/', views.login_view, name = 'login_view'),
    path('signup/', views.signup_view, name = 'signup_view'),
    path('logout/', views.logout_view, name='logout_view'),

    path('post-user/', views.post_user, name='post_user'),
    path('get-user/', views.get_user, name='get_user'),

    path('post-foodtruck/', views.post_foodtruck, name='post_foodtruck'),
    path('get-foodtruck/', views.get_foodtruck, name='get_foodtruck'),
]
