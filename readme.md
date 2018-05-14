# React Expres (CRUD APP)

in this github repo, there is three folder

  - frontend
  - backend
  - database

### Tech

this project uses a number of open source projects to work properly:

* [ExpressJs] - as rest service for backend
* [Sequelize] - ORM for handle database
* [ReactJs] - for frontend view
* [Redux] - bridge data in react
* [React Bootsrap] - css framework
* [Node Js] - runtime environment
* [ MariaDB ] - database

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and devDependencies and start the server.

##### for backend
copy .env.example to .env then configure your database
```sh
$ cd cd react-express/backend/
$ npm install
$ npm run dev:mon => development
$ npm run start => production
```

##### for frontend
change directory to frontend first
```sh
$ cd cd react-express/frontend/
$ npm install
$ npm run start
```

##### for database
first make new schema, default try_andalin
```sh
just run script after database created
```