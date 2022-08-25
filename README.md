# Multi User Writing Pad
This is an exercise project. In this project I would like to exercise the follwing:
 
 1. It will be in NodeJS (No NextJs at first...)
 1. It will use express
 1. It will store the users in a db, preferebly, mongodb
 1. User will have a username and password

# Some sources
How to Create a React App with a Node Backend: The Complete Guide https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/

 # Description how we built the server. 
 ```
 # Create a new project in the folder
 npm init

 # install express
 npm i express

 # The server will be under folder "server"
 # Run the server
 node app.js
 ```

  # How to build the client with React
  ```
  # Create client folder under the project
  npx create-react-app editor_page
  # Run the React
  npm start

  ```

  # General
  See who listens on specific port:
  ```
  # Who is listen on port 3001?
  lsof -nP -i4TCP:3001 | grep LISTEN
  ```