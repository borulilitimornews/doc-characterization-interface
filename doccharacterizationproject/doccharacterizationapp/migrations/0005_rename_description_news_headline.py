# Generated by Django 4.1.3 on 2022-11-08 21:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("doccharacterizationapp", "0004_alter_news_content_alter_news_description"),
    ]

    operations = [
        migrations.RenameField(
            model_name="news", old_name="description", new_name="headline",
        ),
    ]
