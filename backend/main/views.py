from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt

from rest_framework import generics

from django.http import JsonResponse
from .models import UserModel, FoodTruckModel, ReviewModel
import json

@csrf_exempt
def post_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')
        if name and email and message:
            UserModel.objects.create(name=name, email=email, message=message)
            return JsonResponse({'status': 'success'})
        else:
            return JsonResponse({'status': 'error'})
    else:
        return JsonResponse({'status': 'error'})
@csrf_exempt
def get_user(request):
    if request.method == 'GET':
        data = list(UserModel.objects.values())
        return JsonResponse(data, safe=False)
    else:
        return JsonResponse({'status': 'error'})

    
@csrf_exempt
def post_foodtruck(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        location = data.get('location')
        menu = data.get('menu')
        lat = data.get('lat')
        lon = data.get('lon')
        if name and location and menu and lat and lon:
            FoodTruckModel.objects.create(name=name, location=location, menu=menu, lat=lat, lon=lon)
            return JsonResponse({'status': 'success'})
        else:
            return JsonResponse({'status': 'error'})
    else:
        return JsonResponse({'status': 'error'})
@csrf_exempt
def get_foodtruck(request):
    if request.method == 'GET':
        data = list(FoodTruckModel.objects.values())
        return JsonResponse(data, safe=False)
    else:
        return JsonResponse({'status': 'error'})
    

@csrf_exempt
def post_review(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        food_truck = data.get('food_truck')
        author = data.get('author')
        rating = data.get('rating')
        desc = data.get('desc')
        if food_truck and rating and desc and author:
            ReviewModel.objects.create(food_truck=food_truck, author=author, rating=rating, desc=desc)
            return JsonResponse({'status': 'success'})
        else:
            return JsonResponse({'status': 'error'})
    else:
        return JsonResponse({'status': 'error'})
@csrf_exempt
def get_review(request):
    if request.method == 'GET':
        data = list(ReviewModel.objects.values())
        return JsonResponse(data, safe=False)
    else:
        return JsonResponse({'status': 'error'})