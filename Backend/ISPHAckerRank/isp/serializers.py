# isp/serializers.py

from rest_framework import serializers
from .models import ISP

class ISPSerializer(serializers.ModelSerializer):
    class Meta:
        model = ISP
        fields = '__all__'
