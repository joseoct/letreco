import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        }
      },
      defaultProps: {
        colorScheme: 'blue',
      }
    }
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
      },
    }
  }
});
