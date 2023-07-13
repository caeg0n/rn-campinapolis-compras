import { Card } from './Card';
import { PlaceCardInfo } from '@src/components';
import { mockPlaces } from '@src/data';

export default {
  title: 'Card',
  component: Card,

  args: {
    subTitle: 'Sub Title',
    coverImage: require('@src/assets/place-details/cover-photo.jpg'),
    coverImageSize: 'm',
  },

  argTypes: {
    coverImageSize: {
      control: {
        type: 'select',
      },
      options: ['s', 'm', 'l'],
    },
    variant: {
      control: {
        type: 'radio',
      },
      options: [undefined, 'flat'],
    },
  },
};

export const Basic = {
  args: {
    title: 'Basic Card Title',
  },
};

export const Flat = {
  args: {
    title: 'Basic Card Title',
    variant: 'flat',
  },
};

export const SmallHeader = {
  args: {
    title: 'Small Card Title',
    coverImageSize: 's',
    width: 200,
  },
};

export const LargeHeader = {
  args: {
    title: 'Large Card Title',
    coverImageSize: 'l',
    height: 260,
    children: <PlaceCardInfo data={mockPlaces[0]} />,
  },
};
