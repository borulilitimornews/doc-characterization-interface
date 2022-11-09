from django.urls import path
from . import views

#app_name = 'doccharacterizationapp'
urlpatterns = [
    path('', views.index, name='index'),
    path('news/list/', views.index, name='news-list'),
    path('news/add/', views.news_add, name='news-add'),
    path('news/<int:news_id>/detail/', views.news_detail, name='news-detail'),
    path('news/<int:news_id>/edit/', views.news_edit, name='news-edit'),
    #path('news/<int:news_id>/confirm/delete/', views.news_confirm_delete, name='news-confirm-delete'),
    #path('news/<int:news_id>/delete/', views.news_delete, name='news-delete'),
]