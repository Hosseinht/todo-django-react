from rest_framework import serializers

from djoser.serializers import UserCreateSerializer \
    as BaseUserSerializer, UserSerializer

from .models import Todo


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ['id', 'user', 'title', 'is_done']


class UserCreateSerializer(BaseUserSerializer):
    class Meta(BaseUserSerializer.Meta):
        fields = ['id', 'username', 'password', 'first_name', 'last_name']


class UserLoginSerializer(UserSerializer):
    class Meta(BaseUserSerializer.Meta):
        fields = ['id', 'username', 'first_name', 'last_name']
