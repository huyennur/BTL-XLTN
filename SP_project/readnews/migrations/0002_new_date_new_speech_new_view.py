# Generated by Django 4.0.5 on 2022-06-21 15:40

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('readnews', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='new',
            name='date',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now),
        ),
        migrations.AddField(
            model_name='new',
            name='speech',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='new',
            name='view',
            field=models.IntegerField(default=0),
        ),
    ]