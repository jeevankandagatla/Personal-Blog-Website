from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
from .models import Post
from .forms import PostForm, SignUpForm, LoginForm
from django.contrib.auth.decorators import login_required

def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('index')  # Redirect to index after signup
    else:
        form = SignUpForm()
    return render(request, 'blog/signup.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('index')  # Redirect to index after login
    else:
        form = LoginForm()
    return render(request, 'blog/login.html', {'form': form})


# Create your views here.
def post_list(request):
    posts = Post.objects.all().order_by('-created_at')
    return render(request, 'blog/post_list.html', {'posts': posts})

def post_detail(request, pk):
    post = Post.objects.get(pk=pk)
    return render(request, 'blog/post_detail.html', {'post': post})

@login_required
def post_create(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.save()
            return render(request, 'blog/post_detail.html', {'post': post})
        else:
            form = PostForm()
    else:
        return render(request, 'blog/post_create.html', {'form': form})
    
def index(request):
    return render(request, 'blog/index.html', {'user': request.user})
