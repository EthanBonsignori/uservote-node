# UserVote

## Description

This monorepo contains the client and server for UserVote, an application that allows users to vote on a list of features they'd like to see added to a product or service. The application is designed to be used by a business to gather feedback in the form of "Feature Requests" from their customers/consumers and have them vote on the Features that matter the most to them.

## Client

The client is built with TypeScript, React, React-Query, and Material UI and lives at [client/](/client).

## Server

The server is built with Python, FastAPI, Pydantic, and Motor for MongoDB and lives at [server/](/server).

## [Installation](#installation)

1. Clone the repository
1. Setup and start the server:
   1. Navigate to the server i.e. `cd server`
   1. Run `pip install -r requirements.txt` to install the dependencies
   1. Run `uvicorn app.main:app --reload` to start the server
1. Setup the and start the client:
   1. Navigate to the client i.e. `cd client`
   1. Run `npm install` to install the dependencies
   1. Run `npm start` to start the development server

## [Planned Features](#planned-features)

- Dev:
  - [x] Automated client lint github action
  - [ ] Unit tests
  - [ ] Automated tests github action
  - [ ] Automated lint server github action
  - [ ] Add lerna to manage the monorepo
  - [x] Auto deploy client build to netlify (handled by netlify)
  - [ ] Auto build docker image and deploy to google cloud platform (github action/gcp cloud build)
- General:
  - [ ] Per company/service profile
  - [ ] User authentication
  - [ ] User roles and permissions
  - [ ] Unit tests
  - [ ] Upvote feature request
  - [ ] Add Feature Request
  - [ ] Add Comments to Feature Requests
  - [ ] Delete feature request from list if user is the creator
  - [ ] Sort items by vote count
  - [ ] Sort items by date
  - [ ] Sort items by Category
  - [ ] About "SAAS" page with information about the application

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
