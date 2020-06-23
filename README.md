# BRAWNZAA

[![Build](https://github.com/matjack9/brawnzaa-client/workflows/Build/badge.svg)](https://github.com/matjack9/brawnzaa-client/actions?query=workflow%3ABuild)
[![Website brawnzaa.com](https://img.shields.io/website-up-down-green-red/https/www.brawnzaa.com.svg)](https://www.brawnzaa.com)
[![codecov](https://codecov.io/gh/matjack9/brawnzaa-client/branch/master/graph/badge.svg)](https://codecov.io/gh/matjack9/brawnzaa-client)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

Open-source react frontend of Brawnzaa web application

## Backend API

This project is currently using [Firebase](https://firebase.google.com/) for auth and [Firestore](https://firebase.google.com/docs/firestore) for its document collection.

The production configuration is exposed in the project. This is not a security concern.

As per the [Firebase docs](https://firebase.google.com/docs/projects/learn-more#config-files-objects):

> The content of the Firebase config file is considered public, including your platform-specific ID (entered in the Firebase console setup workflow) and values that are specific to your Firebase project, like your API Key, Realtime Database URL, and Storage bucket name. Given this, use security rules to protect your data and files in Realtime Database, Cloud Firestore, and Cloud Storage.

Additionally:

> For open source projects, we generally do not recommend including your Firebase config file or config object in source control because, in most cases, your users should create their own Firebase projects and point their apps to their own backends.

Auth for the production configuration is only enabled for authorized domains. For local development, you will require your own Firebase project to which to point this frontend.

You can create a new Firebase project [here](https://firebase.google.com/). It is simple to set up, and is free to use for many use cases.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
