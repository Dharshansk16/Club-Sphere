# Generated by Django 5.0.6 on 2024-06-25 15:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_club_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='club',
            name='password',
            field=models.CharField(default='', max_length=50),
        ),
    ]
