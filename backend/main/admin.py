from django.contrib import admin
from .models import FoodTruck, UserModel

# Register your models here.
admin.site.register(FoodTruck)
admin.site.register(UserModel)