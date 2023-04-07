from django.db import models

# Create your models here.
class FoodTruckModel(models.Model):
    name = models.CharField(max_length=100, help_text='Enter a food truck name (e.g. Don Memos)')
    # more food truck parameters here

class UserModel(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

 