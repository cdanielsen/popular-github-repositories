# Github Search App

A small react app for searching GitHub repositories

### Setup

After cloning this repository:

- Run `npm install` to install dependencies
- Run `npm start` to start up the app

### Environment Variables

Set actual values in the `.env.local.example` file and rename to `.env.local` to avoid aggressive GitHub API unauthenticated rate limiting. Note this is for personal development only, the compiled bundle should not be deployed in a public setting as these sensitive values would be exposed in the browser.

### User stories / TODO

- (X) As a user, I want to fetch all Github repositories above 25k stars and display the repo name and star count (stargazers_count) on screen
- (X) As a user, I want some indication that data is being fetched
- (X) As a user, I want to be able to specify the stars-count theshold that determines which which repos will be displayed
- (X) As a user, I want to click on one of the rows and be taken to a "Repo details" view that contains repo name, stargazers_count, forks_count, and a link to the repository (html_url). Please use component state for this instead of using a library like react-router
- (X) As a user, I want a "Back" button to return to the list of repos
- () As a user, I want results to be paginated with 5 repos on each page
- () As a user, I want everything to be styled and look good

