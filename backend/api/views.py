from rest_framework.generics import ListAPIView
from .models import *
from .serializers import *

class SkillView(ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

class ExperienceView(ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer
    lookup_field = 'title'

class IntroductionView(ListAPIView):
    queryset = Introduction.objects.all()
    serializer_class = IntroductionSerializer
    lookup_field = 'name'

class EducationView(ListAPIView):       
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
    lookup_field = 'title'

class ProjectView(ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    lookup_field = 'name'
