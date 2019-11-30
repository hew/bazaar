[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# Bazaar

> Have a look around. Maybe you see something you like?

## Demo

https://web-build-jhmnnfnztq.now.sh

(Log in using the demo credentials provided.)

## What & Why

Bazaar is an opinionated boilerplate for building apps quickly and easily. Here's what you get:

**Backend**
  * [Amplify (optional)](https://github.com/aws-amplify/amplify-js) &ndash; for backend data and authentication

**Frontend**
  * [Expo / React Native](https://github.com/expo/expo) &ndash; for x-platform compilation (with web support)
  * [React](https://github.com/facebook/react) &ndash; Hooks API
  * [React Navigation](https://reactnavigation.org) &ndash; for navigation
  * [React Spring](https://github.com/react-spring/react-spring) &ndash; for animation
  * [theme-ui](https://github.com/system-ui/theme-ui) &ndash; for consistent, scalable styles
  * [@xstate/react](https://github.com/davidkpiano/xstate) &ndash; state machine context hooks

**Tools & Testing**
  * [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces) &ndash; for working with multiple Amplify lambdas
  * [Ava (optional)](https://github.com/avajs/ava) &ndash; for testing lambdas/backend
  * [Jest](https://github.com/facebook/jest) &ndash; for testing the front end
  * [Eslint](https://eslint.org/) &ndash; for syntactical hints
  * [Prettier](https://eslint.org/) &ndash; for structural consistency


## Getting Started

*install dependencies*
```
yarn 
```

*start up the app in development mode*
```
yarn workspace frontend run start 
```


## Documentation

  * [Frontend](https://github.com/hew/bazaar/tree/master/frontend)
  * [Backend](https://aws-amplify.github.io/docs/)

## FAQ

<details>

**Question**: *Why the name Bazaar*?

**Answer**: I googled 'expo synonyms' and this was the only one I liked. 

</details>

## Thanks & Inspiration

  * Thanks to all the library authors for making such enjoyable tools. 
  * Additional thanks to Brent Jackson, author of theme-ui, styled-system, etc, for inspiration.

