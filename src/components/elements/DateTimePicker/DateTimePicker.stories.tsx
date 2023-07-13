import { DateTimePicker } from './DateTimePicker';
import React from 'react';
import { Box } from '../Box';
import { Button } from '../Button';
import { isIos } from '@src/utils';

export default {
  title: 'DateTimePicker',
  component: DateTimePicker,

  args: {
    value: new Date(),
    mode: 'date',
    display: 'default',
  },

  argTypes: {
    mode: {
      control: {
        type: 'select',
      },
      options: ['date', 'time'],
    },
    display: {
      control: {
        type: 'select',
      },
      options: ['default', 'spinner'],
    },
  },
};

const DateTimePickerComponent = (props) => {
  const [visible, setVisible] = React.useState(false);

  const onChange = (e) => {
    console.log(e.nativeEvent.timestamp);
    setVisible(false);
  };

  if (isIos) {
    return <DateTimePicker {...props} onChange={onChange} />;
  }

  return (
    <Box>
      <Button
        label="Toggle DateTimePicker"
        onPress={() => setVisible(!visible)}
      />
      {visible && <DateTimePicker {...props} onChange={onChange} />}
    </Box>
  );
};

export const Basic = {
  args: {},
  render: (props) => <DateTimePickerComponent {...props} />,
};

export const DateMode = {
  args: {
    mode: 'date',
  },
  render: (props) => <DateTimePickerComponent {...props} />,
};

export const TimeMode = {
  args: {
    mode: 'time',
  },
  render: (props) => <DateTimePickerComponent {...props} />,
};

export const SpinnerDisplay = {
  args: {
    display: 'spinner',
  },
  render: (props) => <DateTimePickerComponent {...props} />,
};
