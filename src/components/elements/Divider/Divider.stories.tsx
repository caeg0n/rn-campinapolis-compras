import { Divider } from './Divider';
import { mockPlaces } from '@src/data';
import { Card } from '../Card';
import React from 'react';

export default {
  title: 'Divider',
  component: Divider,

  args: {
    marginVertical: 's',
  },
};

export const Basic = {
  render: (args) => (
    <>
      {mockPlaces.map((place, index) => (
        <React.Fragment key={index}>
          <Card
            title={place.title}
            subTitle={place.subTitle}
            subTitleProps={{
              numberOfLines: 2,
            }}
          />
          <Divider {...args} />
        </React.Fragment>
      ))}
    </>
  ),
};
