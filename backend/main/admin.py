from django.contrib import admin
from .models import FoodTruckModel, UserModel

# Register your models here.
admin.site.register(FoodTruckModel)
admin.site.register(UserModel)