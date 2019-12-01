# Bazaar Frontend

## Theme

 * Base theme file: [src/theme/base.js](https://github.com/hew/bazaar/blob/master/frontend/src/theme/base.js)
 * Full documenation: [theme-ui/theme](https://theme-ui.com/theming)
 

## Building UIs

This is the core idea for Bazaar: use primatives (like `<Box />`, `<Text />`) to build complex layouts with the theme-ui spec.

### Example
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
