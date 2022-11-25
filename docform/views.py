from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse


def index(request):
    return render(request, "docform/index.html")

def viewform(request):
    return render(request, "docform/documentform.html")
