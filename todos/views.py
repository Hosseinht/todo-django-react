from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated


from .models import Todo
from .serializers import TodoSerializer


class TodoViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = self.queryset
        query_set = queryset.filter(user=self.request.user)
        return query_set

    def create(self, request, *args, **kwargs):
        todo_data = request.data
        print(todo_data)
        new_todo = Todo.objects.create(
            user=request.user,
            title=todo_data['title'],
            is_done=todo_data['is_done']
        )
        new_todo.save()
        serializer = TodoSerializer(new_todo)
        return Response(serializer.data)
