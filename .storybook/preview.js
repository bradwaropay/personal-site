import "../assets/styles/reset.scss"
import "devicon/devicon.min.css"

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Overview', 'Tokens', 'Structural', 'Simple', 'Complex'],
      },
    },
  },
};

export default preview;
