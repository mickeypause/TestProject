from rest_framework import serializers 
from .models import Discussion, Topic

class TopicSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Topic
        fields = ('id', 'name', 'image')
     
        
class DiscussionSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Discussion
        fields = ('id', 'title', 'description', 'author', 'created_at', 'updated_at', 'topic', 'likes')