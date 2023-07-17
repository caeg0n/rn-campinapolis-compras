import React from 'react';
import { Carousel, Section, Card } from '@src/components/elements';
import { Dimensions } from 'react-native';
// import { mockPlaces } from '@src/data';
import { PlaceCardInfo } from '@src/components';
import { useDispatch, useSelector } from 'react-redux';
import { getRecommendedPlaces } from '@src/redux/actions';
import { useEffect } from 'react';

export const RecommendedPlaces = ({ navigation }) => {
  const dispatch = useDispatch();
  const { recommended_places } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getRecommendedPlaces());
  }, [dispatch]);

  const _onButtonActionPressed = () => {
    navigation.navigate('PlaceList', {
      title: 'Recommended',
    });
  };

  const _onPlaceItemPressed = () => {
    navigation.navigate('PlaceDetails');
  };

  const renderItem = (props) => {
    const { image, title, subTitle } = props.item;
    return (
      <Card
        key={props.index}
        coverImage={image}
        coverImageSize="s"
        title={title}
        subTitle={subTitle}
        marginLeft="m"
        titleProps={{
          numberOfLines: 1,
        }}
        subTitleProps={{
          numberOfLines: 2,
        }}
        onPress={_onPlaceItemPressed}>
        <PlaceCardInfo data={props.item} />
      </Card>
    );
  };

  // const onButtonActionPress = () => {
  //   navigation.navigate('PlaceList', { title: 'Recommended' });
  // };

  // const onPlaceItemPress = () => {
  //   navigation.navigate('PlaceDetails');
  // };

  return (
    <Section
      title="Recommended"
      actionButtonText="View more"
      onButtonActionPress={_onButtonActionPressed}>
      <Carousel
        numItemsPerSlide={1.8}
        data={recommended_places}
        width={Dimensions.get('window').width}
        renderItem={renderItem}
        height={250}
      />
    </Section>
  );
};
