import React from 'react';
import { BottomSheetModal } from './BottomSheetModal';
import { Box } from '../Box';
import { mockPlaces } from '@src/data';
import { Button } from '../Button';
import { Card } from '../Card';
import { Divider, PlaceCardInfo } from '@src/components';

export default {
  title: 'BottomSheetModal',
  component: BottomSheetModal,

  args: {
    snapPoints: ['35%'],
  },

  argTypes: {
    tint: {
      control: {
        type: 'select',
      },
      options: ['light', 'dark'],
    },
  },
};

const BasicComponent = (props) => {
  const { useScrollView, snapPoints } = props;
  const [isOpened, setIsOpened] = React.useState(false);
  return (
    <Box flex={1}>
      <Button label="Toggle Modal" onPress={() => setIsOpened(!isOpened)} />
      <BottomSheetModal
        detached
        useScrollView={useScrollView}
        snapPoints={snapPoints}
        isOpened={isOpened}
        onClose={() => setIsOpened(false)}>
        <Card
          title="Bottom Sheet Modal"
          subTitle="Subtitle"
          coverImage={require('@src/assets/place-details/cover-photo.jpg')}
          borderWidth={1}
          borderColor="border">
          <PlaceCardInfo data={mockPlaces[0]} />
        </Card>
      </BottomSheetModal>
    </Box>
  );
};

const WithScrollViewComponent = (props) => {
  const { useScrollView, snapPoints } = props;
  const [isOpened, setIsOpened] = React.useState(false);
  return (
    <Box flex={1}>
      <Button
        label="Toggle Modal With ScrollView"
        onPress={() => setIsOpened(!isOpened)}
      />
      <BottomSheetModal
        detached
        useScrollView={useScrollView}
        snapPoints={snapPoints}
        isOpened={isOpened}
        onClose={() => setIsOpened(false)}>
        {mockPlaces.map((item, index) => {
          const { image, title, subTitle } = item;
          return (
            <>
              <Card
                key={index}
                coverImage={image}
                title={title}
                subTitle={subTitle}
                borderWidth={1}
                borderColor="border"
                titleProps={{
                  numberOfLines: 1,
                }}
                subTitleProps={{
                  numberOfLines: 2,
                }}>
                <PlaceCardInfo data={item} />
              </Card>
              <Divider marginVertical="s" backgroundColor="card" />
            </>
          );
        })}
      </BottomSheetModal>
    </Box>
  );
};

export const Basic = {
  render: (props) => {
    return <BasicComponent {...props} />;
  },
};

export const WithScrollView = {
  args: {
    useScrollView: true,
    snapPoints: ['70%'],
  },
  render: (props) => {
    return <WithScrollViewComponent {...props} />;
  },
};
