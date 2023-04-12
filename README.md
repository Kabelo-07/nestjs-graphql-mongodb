<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This is a simple application that maintains user information built using [Nest](https://github.com/nestjs/nest), which is a NodeJS framework for building scalable and efficient server-side applications. The user information is stored in a MongoDB and can be accessed and/or created via a GraphQL API

## Installation
To install all dependencies, navigate to the root directory of the project and run

```bash
$ npm install
```

## Running the app
<b>Note</b>: To run the application, ensure you have docker installed on your machine.

The ```docker-compose.yaml``` file in the root directory contains the graphql-api service and mongo-db service configurations. Run the below command to start both graphql and mongodb services:

```bash
$ docker-compose -f docker-compose.yaml up -d --build

```

Verify that both services are up and running

```bash
$ docker ps
```

## Accessing MongoDB Database

To access the MongoDB database that will be created by the application, install [MongoDB Compass](https://www.mongodb.com/products/compass), this is a GUI that can be used to connect to the Databases and be able query and update any documents

## Accessing the GraphQL API Playground
The Playground is in short... well, just that, a playground :-). This is basically an browser-provide GraphQL IDE where we will be able to execute graphQL Queries and Mutations. Visit [GraphQL Webiste](https://graphql.org/learn/) To learn more about graphQL.

To access our running graphQL application's playground, visit (http://localhost:3000/graphql)

## Shutting down the application

```
$ docker-compose down
```

## Stay in touch
- Author - [Kabelo Mashishi](kabelo.mashishi@icloud.com)
- Website - Coming...sometime

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
