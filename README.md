# Music player

## About
This is simply music player uses Django framework for backend and Javascript for frontend. After create an account in administration panel you can add songs with covers witch displays on playlist. In the app you can play song, pause, go to next or previous and rewind with slider. This app is made for learning basics in Javascript and practice web development in Django.

## Demo
https://musicplayerportfolio.pythonanywhere.com/

## Used technologies
Python 3.8<br>
Django 3.2.7<br>
SQLite3<br>
HTML5<br>
CSS3<br>
Javascript

## Setup and run on localhost (Windows)
1 Install Python 3.8 from website:<br>
&emsp;https://www.python.org/downloads/release/python-380/<br>
&emsp;Important - remember to mark "Add Python 3.8 to PATH"!<br>
&emsp;![alt text](https://github.com/lukaszsliwinski/music_player/blob/master/add-python-to-path.png?raw=true)<br><br>
2 Download repository
```bash
git clone https://github.com/lukaszsliwinski/music_player
```
3 Go into main directory
```bash
cd music_player
```
4 Create virtual environment with Python 3.8 (you can use any name)
```bash
py -3.8 -m venv name
```
&emsp;This may take a while<br><br>
5 Run virtual environment
```bash
name\scripts\activate
```
&emsp;Important! Keep virtual environment running always when you use app. To deactivate venv use:
```bash
deactivate
```
6 With venv kept running install required packages from requirements.txt file
```bash
pip install -r requirements.txt
```
&emsp;This may take a while<br><br>
7 Create database
```bash
python manage.py migrate
```
8 Create account
```bash
python manage.py createsuperuser
```
&emsp;Enter username, email adress and password that will be used later to log in administration panel <br><br>
9 Run application on localhost
```bash
python manage.py runserver
```
10 Enter https://127.0.0.1:8000/admin in browser to log in administration panel and add songs<br><br>
11 Enter https://127.0.0.1:8000 in browser to run main page of an app