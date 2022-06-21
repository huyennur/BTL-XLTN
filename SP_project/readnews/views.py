from django.shortcuts import render
from django.http import HttpResponse, response
from readnews.models import New, Category
import json
import os
from django.shortcuts import render
from gtts import gTTS
# from playsound import playsound
from .models import New

# Create your views here.

cvt = {
    "Congnghe": "Technology",
    "Giaitri": "Entertainment",
    "Kinhdoanh": "Business",
    "Doisong": "Life",
    "Thoisu": "Politics",
    "Thegioi": "World",
    "Phapluat": "Sport",
    "Xahoi": "Social"
}


def index(request):
    return render(request, 'index.html')


def social(request):
    return render(request, 'social.html')


def category(request, cname):
    cat = Category.objects.get(name=cname)
    news = New.objects.filter(category__name=cname)
    print(news)
    return render(request, 'social.html', {"news": news, "category": cvt[cname]})


def tts(request, k):
    # if (request.method == 'POST'):
    #     text = request.POST['textinfor']
    #     text = "The Supreme Court ruled Tuesday that state"
    #     tts = gTTS(text=text, lang='en', slow=False)
    #     tts.save("2.mp3")
    #     playsound("2.mp3")
    #     os.remove("2.mp3")

    data = New.objects.get(id=k)
    # text = str(data.content)
    # tts = gTTS(text=text, lang='en', slow=False)
    # tts.save("3.mp3")

    return render(request, "article.html", {'News': New.objects.all().order_by('-date'), "data": data})


# def article(request, k):
#     data = New.objects.get(id=k)

#     return render(request, "article.html", {"data": data})


def search(request):
    if request.method == 'POST':
        searchInput = request.POST["searchInput"]
        news = New.objects.filter(header__icontains=searchInput)\
            or New.objects.filter(content__icontains=searchInput)
        count = news.count()
        if (count == 0):
            msg = ''
        else:
            msg = count
        # data = []
        # for new in news:
        #     data.append({
        #         'header': new.header,
        #         'content': new.content
        #     })
        print(news)
        return render(request, 'search.html', {'news': news, 'msg': msg})
    return render(request, 'search.html')


def searchNew(request):
    searchInput = request.POST.get("searchInput")
    news = New.objects.filter(header__icontains=searchInput)\
        or New.objects.filter(content__icontains=searchInput)
    data = []
    for new in news:
        data.append({
            'header': new.header,
            'content': new.content
        })
    print(data)
    return HttpResponse(json.dumps({"data": data}), content_type='application/json')


def readnews(request):
    # r = requests.get(
    #     "http://api.mediastack.com/v1/news?access_key=695a03763bc379871661f8570ae65670&countries=us")
    # res = r.json()
    # data = res['data']
    # print(r)
    # title = []
    # description = []
    # image = []
    # url = []
    # for i in data:
    #     title.append(i['title'])
    #     description.append(i['description'])
    #     image.append(i['image'])
    #     url.append(i['url'])
    # news = zip(title, description, image, url)
    # return render(request, 'news.html', {'news': news})
    return render(request, 'index.html')
