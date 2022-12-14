# Jobly-v2

### Live-Site
[jobly](http://joshdev-jobly.surge.sh)

## Description 

  A mock job searching and reservation platform. Similar functionality to LinkedIn but on a smaller scale. 
  Jobly has a well designed component hierarchy, a functional database, an API helper, routing, a jobs page, authentication, a user profile, in progress applications, and more.

## Screenshots

![Screenshot from 2022-11-24 15-58-21](https://user-images.githubusercontent.com/28359915/203873392-dfd0e21a-13d3-46f8-8538-706f00c8b397.png)

![Screenshot from 2022-11-24 15-58-48](https://user-images.githubusercontent.com/28359915/203873420-17d2347a-4754-4bad-a38e-48f5b8a681dc.png)

![Screenshot from 2022-11-24 16-18-49](https://user-images.githubusercontent.com/28359915/203873567-491749ff-2753-4f0f-8f2c-f146b4b39690.png)

## Setup
 Follow to run Jobly on your local environment aswell as be able to run the tests. Jobly uses postgresql for its database. Please install postgresql aswell as node and npm.
   
   Backend
   * Create and seed db: psql < jobly.sql
   * Install project dependencies: npm i
   * Start the server: npm start

   Frontend
   * Install project dependencies: npm i
   * Run react-app: npm start

## Authentication
   Jobly authenticates users by providing a JWT token on the backend and storing that token on the front end. Protected routes use Express middleware to run authentication functions that check for certain parameters on a user as well as a JWT token that has been signed with a secret key. The front end stores the token within an API class that offers encapsulation and reusability to access protected routes. All sensitive variables are stored as env variables.

## Testing
  Both the front end and back end are thoroughly tested using Jest. The Backend was developed using TDD to ensure complete coverage and functionality of models and routes.
  Simply run the tests using:
   * npm run test



  
## Technologies
  ### Backend
    * Javscript
    * Node.js
    * Express
    * SQL
    * jsonchema
    * jsonwebtoken
    * bcrypt
    * jest
    * Postgres
  ### Frontend
    * Javascript
    * React
    * React-Router
    * HTML
    * CSS
    * reactstrap
    * axios
    * jest
 
  

## <b>Component Hierarchy</b>

  
![Screenshot from 2022-11-24 15-57-13](https://user-images.githubusercontent.com/28359915/203872580-902ff051-2aa8-45de-bba9-9751e5b80119.png)
