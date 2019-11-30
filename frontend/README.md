# Bazaar Frontend


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
