# Generated by Django 5.0.6 on 2024-06-25 06:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_club_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='link',
            field=models.URLField(blank=True, null=True),
        ),
    ]
