from enum import unique
from django.db import models

class Skill(models.Model):
    AREA_CHOICES = [
        ('backend', 'Backend'),
        ('frontend', 'Frontend'),
        ('ml', 'Machine Learning'),
        ('soft skill', 'Soft Skills'),
        ('tools', 'Tools'),
    ]

    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)
    icon_url = models.URLField(null=True, blank=True)
    area = models.CharField(max_length=50, choices=AREA_CHOICES)

    def __str__(self):
        return f'{self.name} ({self.area})'


class Experience(models.Model):
    title = models.CharField(max_length=100)
    company = models.CharField(max_length=100, null=True, blank=True)
    position = models.CharField(max_length=100, null=True, blank=True)
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    description = models.TextField()
    skills = models.ManyToManyField(Skill, related_name='experiences')

    def __str__(self):
        return self.title


class Introduction(models.Model):
    name = models.CharField(max_length=100)
    profile_img = models.ImageField(upload_to='profile_img', null=True, blank=True)
    description = models.TextField()
    about = models.TextField()
    resume = models.FileField(upload_to='resume', null=True, blank=True)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    location = models.CharField(max_length=50)
    linkedin = models.URLField()
    github = models.URLField()

    def __str__(self):
        return self.name


class Education(models.Model):
    title = models.CharField(max_length=100)
    institution = models.CharField(max_length=100)
    degree = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField()
    description = models.TextField()

    def __str__(self):
        return self.title


class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='project_img', null=True, blank=True)
    skills = models.ManyToManyField(Skill, related_name='projects')
    created_at = models.DateField(null=True, blank=True)
    github = models.URLField()

    def __str__(self):
        return self.name