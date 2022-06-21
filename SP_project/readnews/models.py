from unicodedata import category
from django.db import models
from datetime import datetime


class Category(models.Model):
    name = models.CharField(max_length=50, null=True)

    def __str__(self):
        return self.name


class New(models.Model):
    header = models.CharField(max_length=150)
    category = models.OneToOneField(
        Category, on_delete=models.CASCADE, null=True)
    # image = models.ImageField(
    #     default='user_avatar.png', upload_to='profile_pics')
    content = models.TextField(max_length=5000)
    date = models.DateTimeField(default=datetime.now, blank=True)
    view = models.IntegerField(default=0)
    speech = models.FileField(blank=True, null=True)

    def __str__(self):
        return self.header
