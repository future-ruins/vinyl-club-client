# Vinyl Club - App Client

## About this project

Vinyl Club is a project built for practice purposes. The idea was to develop a simple app that allows local registered users / record collectors to exchange vinyl records from their collections. The project is not yet finished.

Related repos:

- **[App Server](https://github.com/future-ruins/vinyl-club-server)**
  Contains endpoints and database models.

## Table of contents:

- **[How to install](#how-to-install)**
- **[Features built so far](#features-built-so-far)**
- **[Create React App docs](#create-react-app)**

## How to install

1. Clone the git repository

`git clone git@github.com:future-ruins/vinyl-club-client.git`

In the project directory

2. Run `npm install`
3. Run `npm start`. The app runs in the development mode on http://localhost:3000 in the browser.

4. Checkout the **[Server ReadMe](https://github.com/future-ruins/vinyl-club-server/blob/development/README.md)** to install and run the server.

## Features

- **Sign-up and login pages:** users can sign-up and login to use the App

- **Records board:** a page that displays a list of all the records that are up for exchange, with the latest added records showing up on top. Users can search the list of records by artist or by genre

- **Record page:** when clicking on a record on the board, a user is redirected to a page displaying the details about that record including info, a picture, the name of the user that posted the record for exchange and comments. Logged-in users can view all the records posted by another member for exchange (by clicking on the name), message this user for exchange purposes via a form, leave comments on the record.

- **User Menu:** When a user logs in, a menu is visualized that allows member-only functionalities: adding a new record for exchange, editing a posted record, posting comments on a record, signaling interest in a record.

For an overview of features to be implemented or to be fixed check: **[Issues](https://github.com/future-ruins/vinyl-club-client/issues)**

## Create React App

This project was scaffolded using the create-react-app cli.

The standard create-react-app docs can be found **[here](./create-react-app-docs.md)**
