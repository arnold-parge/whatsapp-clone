from django.db import models
from django.contrib.auth.models import User


class Member(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.TextField(max_length=200)
    image = models.ImageField()

    def __str__(self):
        return self.name


class Chat(models.Model):
    def __str__(self):
        return self.pk


class ChatMember(models.Model):
    read = models.BooleanField()
    is_online = models.BooleanField()
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE)
    member = models.ForeignKey(Member, on_delete=models.CASCADE)

    def __str__(self):
        return self.member.name


class Message(models.Model):
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE)
    text = models.TextField(max_length=10000)

    def __str__(self):
        return self.pk
