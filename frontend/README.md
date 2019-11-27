# QUP Frontend

  1. [Styling](#-styling)
  1. [Authentication](#-authentication)

---

## Getting Started

If you have run `yarn install` from the top level of the app, you don't need to do anything. If not, do that.

## Theme 

Theme file: `./src/theme/base.js`

This file is the source of truth for styling. It contains two parts:

  1. **1. Core Theme Values** - these keys contain values, and there values can be directly referenced via strings/numbers, using the component API, to style your component.
  2. **Variants** - these are (alternative) collections of styles for a component. Create variants if you have styles for one of the primatives that will be used across more than one screen.

💡 The API is further documented at [styled-system.com/api](https://styled-system.com/api). See examples below. 

🚧 Due to technical limitations, variant theme values *can not* reference the theme via strings.

```js
// example
{
  someVariant: {
    primary: {
      color: 'primary', 🚫
      color: colors.primary  ✅
    }
  }
}


```

## Component Styling

Use primatives to build more complex layouts. Since this is React Native, it's all flexbox. 

Import from: `./src/theme/primatives.js`

**Basic Example** 

Note the `px={3}` - the `px` is expanded out into `paddingLeft`, `paddingRight`, with the theme value provided for the 3rd index on our space scale.

```js
import { Box } from '../theme/primatives';

export default function HorizontalSpacer({ children, ...props }) {

  return (
    <Box px={3}>{children}</Box> {/* paddingLeft: 8px, paddingRight: 8px */}
  )
}

```

**Variant Example**

```js
import { Text } from '../theme/primatives';

export default function H1({ children, ...props }) {

  return (
    <Text variant="h1">{children}</Text> {/* h1 headings styles */}
  )
}

```

### FAQ

*Q: "When do I create a new primative?"*

**A: You probably shouldn't need to (use variants), unless you are dealing with a *new react native component* (for example: ImagePickerIOS) that cannot 
be wrapped in an existing primative to make the styles work.**

*Q: "Where does the theme get passed into the app, and how is it referenced by the components?"*

**A: The theme is passed into the app via context (`App.js`), and the components pull in the theme from context**


## 🔐 Authentication

General Architecture

  1. Any route request is intercepted at the top level of the app, and an authentication check happens.
  2. If user is still logged in, they are taken to the lobby.
  3. If the user is not logged in, they are taken to the login page.
  4. In the former case, the user should have all the data they need (in context) for displaying lobby components.

🚧 If you need to further add any kind of "sync" behaviour for a given session that **isn't** page specific (for example, 
only happens when going back to the Lobby), then we can put it into the machine. 
