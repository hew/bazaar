[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# Bazaar

> Have a look around. Maybe you see something you like?

## Demo

https://web-build-jhmnnfnztq.now.sh

(Log in using the demo credentials provided.)

## What & Why

Bazaar is an opinionated boilerplate for building apps quickly and easily. Here's what you get:

  * [Amplify](https://github.com/aws-amplify/amplify-js) &ndash; for backend data and authentication
  * [Expo](https://github.com/expo/expo) &ndash; for x-platform compilation (with web support)
  * [Jest](https://github.com/facebook/jest) &ndash; for testing the front end
  * [Ava](https://github.com/avajs/ava) &ndash; for testing lambdas/backend
  * [React](https://github.com/facebook/react) &ndash; context hooks
  * [React Navigation](https://reactnavigation.org) &ndash; for navigation
  * [React Spring](https://github.com/react-spring/react-spring) &ndash; for animation
  * [theme-ui](https://github.com/system-ui/theme-ui) &ndash; for consistent, scalable styles
  * [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces) &ndash; for working with multiple Amplify lambdas
  * [@xstate/react](https://github.com/davidkpiano/xstate) &ndash; state machine context hooks


## Building UIs

💡 Use primatives (like `<Box />`, `<Text />`) to build complex layouts with the theme-ui spec.

```js
import { Box, Text } from '../theme/primatives';

function Example({ children, ...props }) {
 return (
   <>
     <Box px={3} /> {/* paddingLeft: 8px, paddingRight: 8px */}
     <Text variant="h1" /> {/* h1 variant styles */}
   </>
 )
}

```

## Building Backends

See the [Amplify docs](https://aws-amplify.github.io/docs/).

## FAQ

**Question**: *Why the name Bazaar*?

**Answer**: I googled 'expo synonyms' and this was the only one I liked. 

## Thanks & Inspiration

All the library authors (this is just a boilerplate, after all). But especially to Brent Jackson, author of theme-ui, styled-system, etc.

