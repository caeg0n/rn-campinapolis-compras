import { ActivityIndicator } from './ActivityIndicator';

export default {
  title: 'ActivityIndicator',
  component: ActivityIndicator,

  args: {
    size: 'small',
    color: 'red',
  },

  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'large'],
    },
  },
};

export const Basic = {
  args: {
    size: 'small',
  },
};

export const Large = {
  args: {
    size: 'large',
  },
};

export const CustomColor = {
  args: {
    size: 'large',
    color: 'green',
  },
};
