import React from 'react';
import { Image, List, ListRowItem } from '@src/components';
import { activityHistoryList } from '@src/data/mock-activity-history';
import { useActivityHistoryStackNavigation } from '@src/hooks';
import { formatCurrency } from '@src/utils';

export const ActivityHistory = () => {
  const navigation = useActivityHistoryStackNavigation();

  const data = activityHistoryList.map((item) => {
    const {
      restaurantName,
      date,
      orderDetail: { totalItems, price },
      bookingId,
    } = item;
    return {
      id: bookingId,
      title: restaurantName,
      subTitle: `${totalItems} items | ${formatCurrency(totalItems * price)}`,
      note: date,
      onPress: () => navigation.navigate('ActivityHistoryDetail'),
      leftElement: (
        <Image
          source={require('@src/assets/common/food.png')}
          width={30}
          height={30}
        />
      ),
    };
  });

  const renderItem = (props) => {
    return <ListRowItem key={props.index} {...props.item} />;
  };

  return <List data={data} renderItem={renderItem} />;
};
