from django.contrib import admin
from .models import *

admin.site.register(Experience)
admin.site.register(Introduction)
admin.site.register(Education)
admin.site.register(Project)

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'area')
    search_fields = ('name', 'area')
    list_filter = ('area',)