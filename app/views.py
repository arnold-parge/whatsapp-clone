from django.shortcuts import render


def home(request):
    return render(request, 'home.html', context={})


def send_message(request):
    pass
