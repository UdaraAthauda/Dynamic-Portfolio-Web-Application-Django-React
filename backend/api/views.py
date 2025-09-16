from rest_framework.generics import ListAPIView
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.mail import send_mail
from django.conf import settings

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

class ContactView(APIView):
    def post(self, request):
        
        name = request.data.get('name')
        email = request.data.get('email')
        msg = request.data.get('message')

        if not email or not msg:
            return Response(status=400)

        subject = f"Contact Form Submmision from {email}"
        body = f"Name: {name}\nEmail: {email}\nMessage: {msg}"

        try:
            send_mail(
                subject,
                body,
                settings.EMAIL_HOST_USER,
                [settings.EMAIL_HOST_USER],
                fail_silently=False,
            )
            return Response(status=200)
        except:
            return Response(status=400)