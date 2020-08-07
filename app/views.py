from django.shortcuts import render
from django.http import JsonResponse
from app.services.auth_svc import AuthSvc
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST


def home(request):
    return render(request, 'home.html', context={})


@csrf_exempt
@require_POST
def auth(request):
    sid = request.POST.get('sid', '')
    if (sid is None):
        return JsonResponse({
            'is_auth': False,
            'message': 'Empty sid'
        })

    is_auth = AuthSvc.isAuthenticated(sid)
    return JsonResponse({
        'is_auth': is_auth,
        'message': 'success'
    })


def send_message(request):
    # Check authentication
    pass
