import React from 'react';
import { Carousel, Section, Card, PlaceCardInfo } from '@src/components';
import { Dimensions } from 'react-native';
import { mockPlaces } from '@src/data';

export const PopularPlaces = ({ navigation }) => {
  const renderItem = (props) => {
    const { image, title, subTitle } = props.item;
    return (
      <Card
        key={props.index}
        coverImage={image}
        coverImageSize="m"
        title={title}
        subTitle={subTitle}
        marginLeft="m"
        titleProps={{
          numberOfLines: 1,
        }}
        subTitleProps={{
          numberOfLines: 2,
        }}
        onPress={onPlaceItemPress}>
        <PlaceCardInfo data={props.item} />
      </Card>
    );
  };

  const onButtonActionPress = () => {
    navigation.navigate('PlaceList', { title: 'Popular Near You' });
  };

  const onPlaceItemPress = () => {
    navigation.navigate('PlaceDetails');
  };

  return (
    <Section
      title="Popular Near You"
      actionButtonText="View more"
      onButtonActionPress={onButtonActionPress}>
      <Carousel
        width={Dimensions.get('window').width}
        height={255}
        numItemsPerSlide={1.2}
        data={mockPlaces}
        snapEnabled
        renderItem={renderItem}
      />
    </Section>
  );
};
