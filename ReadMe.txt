Task1 is a command line application that opens a url and scraps web data
to start task 1 use this command npx ts-node ./src/main.ts https://m.skybet.com/horse-racing in that Task1 directory

Task2 is a web application with a seperate front and back end
to start the back end run these commands from the Task2/back-end-api directory
	npm install
	npm start

to start the front end run these commands from the Task2/front-end-spa directory
	npm install
	npm start

login to web app with username admin password password123456!
the front end runs on port 3001 by default and can be accessed with this url http://localhost:3001
the back end runs on port 3005 by default

you can change these ports
change the front end port by modifying the origin field in Task2/back-end-api/app-settings.json and the port field in the Task2/front-end-spa/.env file
change the back end port by modifying the port field in Task2/front-end-spa/src/app-settings.json and the port field in Task2/back-end-api/app-settings.json

assumptions
	you are using the provided sqlite database
	you have npm installed
