from rest_framework import permissions
from users.models import User
from django.core.exceptions import ValidationError

class IsCreator(permissions.IsAuthenticated):
    def has_object_permission(self, request, view, obj):
        """
          Checks if the user is the owner of the room
        """

        user = request.user
        if user is None:
            return False
        return user == obj.creator