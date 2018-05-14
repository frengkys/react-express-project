
# node_es6_rest_starter
nodejs boilerplate projects starter for rest application

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
installing nodejs, yarn, and sequelize
```

### Installing

A step by step series of examples that tell you have to get a development env running

first clone project 
```
git clone https://github.com/frengkys/node_es6_rest_starter.git
```
and then install node js modules with

```
npm install
```

if you are using yarn

```
yarn
```
i am using yarn for starting this project
## Running the application

Explain how to run the automated tests for this system

### Getting Started

to start the application first, migrate database this project is using [Squelize](https://github.com/sequelize/cli) 

```
sequelize db:migrate
```
then start the application
```
yarn start
```
then you can see the project are running on port 8888, and getting started with making request on
```
localhost:8888/api/test
```
### List of commands

this is list of command that this application have

```
yarn start - to starting project
yarn build - to build/convert project to es5
yarn dev - to starting project in dev mode
yarn dev:mon - same with yarn dev but with monitoring tools
yarn test - for unit testing
```

## Deployment

For deployment, run ``yarn build`` command on your server, if you wanna use process manager so the application always running i'm using [PM2](https://github.com/Unitech/pm2)

## Technology

* NodeJs
* Expressjs
* SQL
* Sequelize
* Yarn
* Mocha n Chai

## Authors

* **Frengkys** - *Initial work* 

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
