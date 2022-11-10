from django.db import models
from tinymce.models import HTMLField


# Create your models here.
class Status(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.name


class News(models.Model):
    slug = models.CharField(max_length=300)
    title = models.CharField(max_length=250)
    lead = HTMLField(max_length=500, blank=True)
    content = HTMLField(max_length=5000)
    status = models.ForeignKey(Status, on_delete=models.CASCADE, default=1)

    def __str__(self) -> str:
        return self.title
