from django.shortcuts import render, redirect
from .forms import NewsForm
from .models import News
from django.core.paginator import Paginator


# Create your views here.

def index(request):
    news_all = News.objects.order_by("-id")
    paginator = Paginator(news_all, 25)

    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    context = {
        'news_list': page_obj
    }
    return render(request, 'index.html', context)


def news_add(request):
    form = NewsForm(request.POST or None)
    if form.is_valid():
        news = form.save()
        return redirect("/news/list")
    context = {"form": form}
   
    return render(request, "news/add.html", context)


def news_detail(request, news_id):
    news = News.objects.get(id=news_id)
    context = {
        'news': news
    }    
    
    return render(request,"news/detail.html", context)


def news_edit(request, news_id):
    news = News.objects.get(id=news_id)
    if request.method == 'POST':
        form = NewsForm(request.POST, instance=news)
        if form.is_valid():
            news = form.save()
            return redirect("/news/list")
    else:
        form = NewsForm(instance=news)
    context = {"form": form}
    
    return render(request,"news/edit.html", context)


def news_confirm_delete(request, news_id):
    news = News.objects.get(id=news_id)
    context = {
        'news': news
    }

    return render(request, "news/delete.html", context)


def news_delete(request, news_id):
    news = News.objects.get(id=news_id).delete()
    context = {
        'news': news
    }

    return redirect("/news/list")