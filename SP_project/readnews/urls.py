from django.contrib.auth import views
from django.urls import path
from readnews import views

urlpatterns = [
    path('readnews/', views.readnews, name='readnews'),
    path('', views.index, name='index'),
    path('category/<cname>', views.category, name='category'),
    path('social/', views.social, name='social'),
    path("", views.tts, name="tts"),
    path("article/<int:k>", views.tts, name="article"),
    path('searchNew/', views.searchNew, name='searchNew'),
    path('search/', views.search, name='search'),
]
