# Generated by Django 5.0.6 on 2024-06-28 07:46

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_alter_club_created_by'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name='club',
            name='created_by',
            field=models.OneToOneField(default='', on_delete=django.db.models.deletion.CASCADE, related_name='club', to=settings.AUTH_USER_MODEL),
        ),
    ]
