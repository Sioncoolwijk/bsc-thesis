
# Thesis Project

#### General information
This repository contains the code for my Bachelor's Thesis in Information Sciences at the University of Amsterdam. It was authored by S.A. Coolwijk.

Included in this repository are all the files necessary for creating a custom website. This website initially serves as a survey via an embedded Google Forms link. Additionally, it facilitates an experiment/assignment utiziling an OpenAI API in which students can participate.

Note that I have not included the .env file, where the API key has been stored as environment variable, for security reasons. 

#### Front-End

The CSS, JS, HTML, and .htaccess files have been added to the webspace manager of [STRATO](https://www.strato.nl/) to host the website. The website is live as of May 16, 2023, and can be accessed until July 2023 here: [www.onderzoeknaarchatgpt.nl](https://www.onderzoeknaarchatgpt.nl).

#### Back-End

In this repository, a local host in used in the fetch command. Personally, I've set up a server at [render.com](https://render.com/) that deploys our Node.js application via our index.js file. The modules and packages this application depends on are created using the ```npm init``` command.

Additionally, PHP is used to connect to save the user's input in the form and the click behavior on the GPT button. This is stored in the MySQL database that is included on the host. The credentials of this db have been excluded in the code.
