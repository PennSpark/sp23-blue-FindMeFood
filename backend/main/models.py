from django.db import models
from django.contrib.auth.models import User

# Create your models here.ip3


class FoodTruckModel(models.Model):
    name = models.CharField(max_length=100, help_text='Enter a food truck name (e.g. Don Memos)')
    # more food truck parameters here
    location = models.CharField(max_length=200, help_text='Enter food truck location', null = True, blank = True)
    menu = models.ImageField(null = True)
    lat = models.FloatField(null = True)
    lon = models.FloatField(null = True)

class UserModel(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class ReviewModel(models.Model):
    food_truck = models.CharField(max_length=100)
    author = models.CharField(default='Anon', max_length=50)
    rating = models.IntegerField()
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
 
class LeaderboardModel(models.Model): 
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    reviews_count = models.PositiveIntegerField(default=0)
    