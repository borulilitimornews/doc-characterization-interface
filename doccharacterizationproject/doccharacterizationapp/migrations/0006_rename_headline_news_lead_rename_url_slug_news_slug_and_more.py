# Generated by Django 4.1.3 on 2022-11-08 23:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("doccharacterizationapp", "0005_rename_description_news_headline"),
    ]

    operations = [
        migrations.RenameField(
            model_name="news", old_name="headline", new_name="lead",
        ),
        migrations.RenameField(
            model_name="news", old_name="url_slug", new_name="slug",
        ),
        migrations.AlterField(
            model_name="news",
            name="status",
            field=models.ForeignKey(
                default=1,
                on_delete=django.db.models.deletion.CASCADE,
                to="doccharacterizationapp.status",
            ),
        ),
    ]
