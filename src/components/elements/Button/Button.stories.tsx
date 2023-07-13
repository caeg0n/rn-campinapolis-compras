import { Button } from './Button';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { Box } from '../Box';

export default {
  title: 'Button',
  component: Button,

  args: {
    label: 'Button',
    isFullWidth: true,
    buttonSize: 'm',
    variant: 'primary',
    onPress: () => console.log('Button pressed'),
  },

  argTypes: {
    buttonSize: {
      control: {
        type: 'select',
      },
      options: ['s', 'm', 'l'],
    },
    variant: {
      control: {
        type: 'select',
      },
      options: [
        'primary',
        'danger',
        'warning',
        'success',
        'info',
        'outline',
        'transparent',
        'facebook',
        'google',
      ],
    },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    label: 'Primary',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    label: 'Danger',
  },
};

export const Warning = {
  args: {
    variant: 'warning',
    label: 'Warning',
  },
};

export const Success = {
  args: {
    variant: 'success',
    label: 'Success',
  },
};

export const Info = {
  args: {
    variant: 'info',
    label: 'Info',
  },
};

export const Outline = {
  args: {
    variant: 'outline',
    label: 'Outline',
  },
};

export const Transparent = {
  args: {
    variant: 'transparent',
    label: 'Transparent',
  },
};

export const Facebook = {
  args: {
    variant: 'facebook',
    label: 'Facebook',
  },
};

export const Google = {
  args: {
    variant: 'google',
    label: 'Google',
  },
};

export const WithCustomChildren = {
  args: {
    variant: 'primary',
    children: (
      <Box flexDirection="row" justifyContent="center" alignItems="center">
        <Icon name="logo-react" color="white" size={22} marginRight="s" />
        <Text color="white">Custom Text With Icon</Text>
      </Box>
    ),
  },
};
