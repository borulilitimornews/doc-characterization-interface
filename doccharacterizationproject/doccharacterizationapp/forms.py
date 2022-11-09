from django.forms import ModelForm, Textarea
from .models import News


class NewsForm(ModelForm):
    class Meta:
        model = News
        fields = "__all__"