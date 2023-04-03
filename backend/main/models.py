from django.db import models

class MyModel(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)



# Create your models here.
class FoodTruck(models.Model):
    """Model representing a book genre."""
    name = models.CharField(max_length=200, help_text='Enter a food truck name (e.g. Don Memos)')
        
    def __str__(self):
        """String for representing the Model object."""
        return self.name







class TestModel(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

 