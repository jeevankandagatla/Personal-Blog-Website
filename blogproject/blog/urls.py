from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('post/<int:pk>/', views.post_detail, name='post_detail'),
    path('signup/', views.signup, name='signup'),
    path('login/', views.login_view, name='login'),
]