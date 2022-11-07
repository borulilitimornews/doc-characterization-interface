from django.db import models

# Create your models here.
class Status(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.name


class News(models.Model):
    url_slug = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    content = models.TextField(max_length=5000)
    status = models.ForeignKey(Status, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.title
