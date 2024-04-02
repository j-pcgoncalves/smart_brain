# Smart Brain

This project is made with React. It has a Login and Register Pages. This project uses a PostgreSQL DB to store the users. Inside the website, the user has an input field where they can input an image URL. The website then connects with the Clarifai API which returns information about the faces inside the image and displays the location of the faces to the user. It also keeps track of how many times a user inputs an URL. It makes use of sessionStorage and a Redis Client DB to manage Token Sessions.

## How to Use

You can clone this project to your computer and run "npm install" in the root of the project to install dependencies. With all set you can run "npm start" in your terminal to start your development server. You need to also run the Smart Brain API in your computer for it to work properly.

## Credits

This project was made for the Zero to Mastery Course: [The Complete Web Developer in 2024: Zero to Mastery](https://zerotomastery.io/courses/coding-bootcamp/), taught by Andrei Neagoie and Adam Odziemkowski
