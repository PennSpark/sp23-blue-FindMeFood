from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt

from rest_framework import generics

def main_view(request):
    return render(request, 'main.html' )
    
def splash_view(request): 
    return render(request, 'splash.html')

def login_view(request): 
    username, password = request.POST['username'], request.POST['password'] 
    user = authenticate(username=username, password=password) 
    if user is not None: 
        login(request, user) 
        return redirect('/') 
    else: 
        return redirect('/splash?error=LoginError')

def signup_view(request): 
    user = User.objects.create_user( 
        username=request.POST['username'], 
        password=request.POST['password'], 
        email=request.POST['email'], 
    ) 
    login(request, user) 
    return redirect('/')

def logout_view(request):
    logout(request)
    return redirect('/splash')







from django.http import JsonResponse
from .models import UserModel, FoodTruckModel
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
        if name:
            FoodTruckModel.objects.create(name=name)
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