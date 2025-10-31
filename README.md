# PropCert Technical Challenge

**Shop Inventory Management System with Immudb**

This code challenge is demonstration of my technical knowledge and a display of my ability to solve
problems.

The goal of this project is to build an immutable inventory management system for a retail shop that tracks inventory
changes, provides audit trails, and prevents tampering with historical records.

## Setup

Clone the project:
`git clone `

Install the dependencies:
`pnpm install`

## Run

### Server

To start the server, run the ff in your terminal:
`pnpm start`

### ImmuDB

1. Assuming you are in the project root directory, cd into the containers directory on your 
terminal. `cd containers`
2. Assuming you have docker (it should be running) and docker compose already installed, run 
`docker compose up`. If you  want to run in detached mode, use `docker compose up -d`
3. If you did not run in detached mode, you can use `ctrl + c` in your terminal to stop the service.

The ImmuDB web UI is accessible at `localhost:8080`
```
user: immudb
pass: immudb
```

## Test

To start the tests, run the ff in your terminal:
`pnpm run test`

## Quick links

[]()