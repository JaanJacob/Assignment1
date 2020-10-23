# Assignment1
Assignment 1 of software frameworks course - chat system.

## __GitHub:__ 
The version history of this project can be found here: https://github.com/JaanJacob/Assignment1.git 

## __Users:__
User names are defined as ‘aa’, ‘bb’ etc for convenience.
All the users have the same password ‘123’.

name | email | id | role
-----|-------|----|-----
super |	super@gmail.com |	1 |	superAdmin
groupAD |	groupAD@gmail.com |	2 |	groupAdmin
groupAS |	groupAS@gmail.com |	3 |	groupAssis
aa |	aa@gmail.com |	4 |	user
bb |	bb@gmail.com |	5 |	user
cc |	cc@gmail.com |	6 |	user
dd |	dd@gmail.com |	7 |	user
ee |	ee@gmail.com |	8 |	user


## __Angular architecture:__
There are three components; login component where a user can log in using a name and password and then these credentials are checked against an array of users. 
Account component where the logged in user information are displayed. It displays the logged in user name acquired from the local storage as the user logs in. Then it shows the groups that the particular user is part of and all the rooms available for that group.
The chat component was intended to display the chat session once the user decides which room to chat in. It displays the text area where you can type your message and submit and an area to view all the message other users are sending. 
A service called login is used which is placed under the services folder. Which has a Boolean value of whether any user is logged in or not. Using this service I am showing a logout button if user is logged in and a login button if no user is logged in. 


## __Routes:__
Routes are used to navigate to pages. Angular routes are specified as a path and the component to load. Three routes are specified; ‘login’ to go to login component, ‘account’ to load account component and ‘chat’ to load chat component.  A home path ‘’ gets redirected to ‘login’ so that when the app starts it will automatically goes to login page. 
