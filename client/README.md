# UserVote Client

The client for UserVote. Built with TypeScript, React, React-Query, and Material UI.

## Requirements

Node.js version 20.x, recommended to use [nvm](https://github.com/nvm-sh/nvm) which will automatically use the .nvmrc file to set the correct version of Node.js.

## Installation

See [Installation in the root README.md](/README.md#installation)

## Updating the API Types

1. Start the server, see [server/README.md](/server/README.md)
1. Navigate to the server docs url in your browser, i.e. `http://localhost:8000/docs`
1. Click the `/openapi.json` link at the top of the page
1. Save the file to `client/src/api/openapi.json`, replacing the existing file
1. From the client root, run `npm run api:generate` to generate the TypeScript types and api methods

## Planned Features

See [Planned Features in the root README.md](/README.md#planned-features)
