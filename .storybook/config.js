import { configure } from '@storybook/react';

// automatically import all files ending in *.js
configure(require.context('../playground', true, /\.(js)$/), module);
