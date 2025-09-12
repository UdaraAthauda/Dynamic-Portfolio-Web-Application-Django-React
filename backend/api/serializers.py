from rest_framework.serializers import ModelSerializer
from .models import *

class SkillSerializer(ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'

class ExperienceSerializer(ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)

    class Meta:
        model = Experience
        fields = '__all__'

class IntroductionSerializer(ModelSerializer):
    class Meta:
        model = Introduction
        fields = '__all__'

class EducationSerializer(ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

class ProjectSerializer(ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = '__all__'

