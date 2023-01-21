from rest_framework import generics 
from .models import Topic, Discussion
from .serializers import DiscussionSerializer, TopicSerializer


class ListTopic(generics.ListAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
    
class DetailTopic(generics.RetrieveAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer


class ListDiscussion(generics.ListAPIView):
    queryset = Discussion.objects.all()
    serializer_class = DiscussionSerializer


class DetailDiscussion(generics.RetrieveAPIView):
    queryset = Discussion.objects.all()
    serializer_class = DiscussionSerializer
    

