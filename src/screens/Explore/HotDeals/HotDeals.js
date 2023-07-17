import React from 'react';
import { Carousel, Section, Card } from '@src/components/elements';
import { Dimensions } from 'react-native';
// import { mockPlaces } from '@src/data';
import { PlaceCardInfo } from '@src/components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHotDeals } from '@src/redux/actions';

export const HotDeals = ({ navigation }) => {
  const dispatch = useDispatch();
  const { hot_deals } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getHotDeals());
  }, [dispatch]);

  const _onButtonActionPressed = () => {
    navigation.navigate('PlaceListScreen', {
      title: 'Hot Deals',
    });
  };

  const _onPlaceItemPressed = () => {
    navigation.navigate('PlaceDetailsScreen');
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
      title="Hot deals around you"
      actionButtonText="View more"
      onButtonActionPress={_onButtonActionPressed}>
      <Carousel
        numItemsPerSlide={1.8}
        data={hot_deals}
        width={Dimensions.get('window').width}
        renderItem={renderItem}
        height={250}
      />
    </Section>
  );
};
