# Generated by Django 4.1.3 on 2022-11-10 21:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        (
            "doccharacterizationapp",
            "0006_rename_headline_news_lead_rename_url_slug_news_slug_and_more",
        ),
    ]

    operations = [
        migrations.AlterField(
            model_name="news", name="slug", field=models.CharField(max_length=300),
        ),
        migrations.AlterField(
            model_name="news", name="title", field=models.CharField(max_length=250),
        ),
    ]