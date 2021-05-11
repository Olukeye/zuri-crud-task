# zuri-crud-task
crud app with express and mongodb

// README.md
# Project Support
### Introduction
### Installation Guide
* Clone this repository [here] (https://github.com/Olukeye/zuri-crud-task) in the clone profile.
* The develop branch is the most stable branch at any given time, ensure you're working from it.
* Run npm install to install all dependencies
* You can either work with the default mLab database or use your locally installed MongoDB. Do configure to your choice in the application entry file.
* Create an .env file in your project root folder and add your variables. See .env.sample for assistance.
## Usage
* Run npm nodemon on the terminal to start the application.
* Connect to the API using Postman on port 2021.
### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST |('/data')| To create a new user |
| GET | ('/data/:Id') | To retrieve details of a single user|
| PATCH | ('/data/:Id') | To edit the details of a single user |
| DELETE |('/data/:Id') | To delete a single user |
### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
#####
The project is hosted on (http://zuri-crud-training.herokuapp.com/)
