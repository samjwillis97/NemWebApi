# NemWeb API

See: https://www.section.io/engineering-education/how-to-create-a-simple-rest-api-using-typescript-and-nodejs/

## Setup

Initialize NPM

```sh
npm init -y
```

Install Dependencies

```sh
npm install typescript ts-node express @types/express axios @types/axios nodemon
```

Initialize Typescript

```sh
tsc --init
```

## Folder Structure

See: https://softwareontheroad.com/ideal-nodejs-project-structure/?utm_source=pocket_mylist

```
    src
    │   app.js          # App entry point
    └───api             # Express route controllers for all the endpoints of the app
    └───config          # Environment variables and configuration related stuff
    └───jobs            # Jobs definitions for agenda.js
    └───loaders         # Split the startup process into modules
    └───models          # Database models
    └───services        # All the business logic is here
    └───subscribers     # Event handlers for async task
    └───types           # Type declaration files (d.ts) for Typescript
```