from django.shortcuts import render, get_list_or_404
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.views import generic

from .models import Status, News

# Create your views here.

class IndexView(generic.ListView):
    template_name = "doccharacterizationapp/index.html"
    context_object_name = "all_news_list"

    def get_queryset(self):
        return News.objects.all()


class DetailView(generic.DetailView):
    model = News
    template_name = "doccharacterizationapp/detail.html"