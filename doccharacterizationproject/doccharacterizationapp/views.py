from django.shortcuts import render, redirect
from .forms import NewsForm
from .models import News
from django.db.models import Q
from django.core.paginator import Paginator
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout


# Create your views here.
#@login_required()
def index(request):
    news_all = News.objects.order_by("id")
    paginator = Paginator(news_all, 20)

    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    context = {
        'news_list': page_obj
    }
    return render(request, 'index.html', context)


# GET search text
def search_result(request):
    searched_text = request.GET.get("text")
    search_news_list = (
        News.objects.filter(
            Q(title__icontains=searched_text)
            | Q(status__name__icontains=searched_text)
        )
        .distinct()
        .order_by("-id")
    )
    context = {
        "news_list": search_news_list,
        "searched_text": searched_text,
    }

    # if search result is empty
    if not search_news_list:
        return redirect("/search-not-found")
    return render(request, "search-result.html", context)


def search_not_found(request):
    return render(request, "search-not-found.html")


@login_required()
def news_add(request):
    form = NewsForm(request.POST or None)
    if form.is_valid():
        news = form.save()
        return redirect("/")
    context = {"form": form}
   
    return render(request, "news/add.html", context)

@login_required()
def news_detail(request, news_id):
    news = News.objects.get(id=news_id)
    context = {
        'news': news
    }    
    
    return render(request,"news/detail.html", context)


@login_required()
def news_edit(request, news_id):
    news = News.objects.get(id=news_id)
    if request.method == 'POST':
        form = NewsForm(request.POST, instance=news)
        if form.is_valid():
            news = form.save()
            return redirect("/")
    else:
        form = NewsForm(instance=news)
    context = {"form": form}
    
    return render(request,"news/edit.html", context)


@login_required()
def news_confirm_delete(request, news_id):
    news = News.objects.get(id=news_id)
    context = {
        'news': news
    }

    return render(request, "news/delete.html", context)


@login_required()
def news_delete(request, news_id):
    news = News.objects.get(id=news_id).delete()
    context = {
        'news': news
    }

    return redirect("/")


def logout_view(request):
    logout(request)

    return redirect("/")