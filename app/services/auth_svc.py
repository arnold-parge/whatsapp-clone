# from django.utils.importlib import import_module
from importlib import import_module
from django.conf import settings
from django.contrib.auth import get_user
from django.contrib.auth.models import AnonymousUser
from django.contrib.auth import SESSION_KEY, BACKEND_SESSION_KEY, load_backend

class AuthSvc:
    @staticmethod
    def isAuthenticated(YOUR_SESSION_KEY):
        engine = import_module(settings.SESSION_ENGINE)
        session = engine.SessionStore(YOUR_SESSION_KEY)
        try:
            user_id = session[SESSION_KEY]
            backend_path = session[BACKEND_SESSION_KEY]
            backend = load_backend(backend_path)
            user = backend.get_user(user_id)
        except KeyError:
            return False

        return user.is_authenticated()
