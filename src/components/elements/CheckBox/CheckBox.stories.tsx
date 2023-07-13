import { CheckBox } from './CheckBox';
import { Icon } from '../Icon';

export default {
  title: 'CheckBox',
  component: CheckBox,

  args: {
    label: 'My CheckBox',
    onChange: () => console.log('checked'),
  },
};

export const Basic = {
  args: {},
};

export const WithRightElement = {
  args: {
    rightElement: <Icon name="logo-react" isPrimary />,
  },
};
