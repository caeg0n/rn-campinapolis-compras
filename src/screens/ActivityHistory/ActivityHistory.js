import React from 'react';
import { Image, List, ListRowItem } from '@src/components';
import { useActivityHistoryStackNavigation } from '@src/hooks';
import { formatCurrency } from '@src/utils';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
//import { activityHistoryList } from '@src/data/mock-activity-history';

export const ActivityHistory = () => {
  const navigation = useActivityHistoryStackNavigation();
  const { orders } = useSelector((state) => state.sessionReducer);

  const data = Object.entries(orders).flatMap(([reference, orgOrders]) => {
    return Object.entries(orgOrders).flatMap(([organizationId, ordersList]) => {
      const organizationName =
        ordersList[0]?.organization_name || 'Comércio Desconhecido';
      const organizationLogo = ordersList[0]?.organization_logo || '?';
      const dataInfo = ordersList[0]?.data || '?';

      const totalOrders = ordersList.reduce((total, order) => {
        total += order.amount;
        return total;
      }, 0);

      const totalPrice = ordersList.reduce((total, order) => {
        total += parseFloat(order.total);
        return total;
      }, 0);

      return [
        {
          id: reference + '-' + organizationId,
          title: `${organizationName}`,
          subTitle: `${totalOrders} items | ${formatCurrency(totalPrice)}`,
          note: `Referência: ${reference}`,
          dataInfo: `Data: ${dataInfo}`,
          onPress: () =>
            // navigation.navigate('ActivityHistoryDetail', {
            //   reference,
            //   organizationId,
            // }),
            navigation.navigate('TrackOrder', {
              reference,
              organizationId,
            }), 
          leftElement: (
            <View
              style={{
                borderRadius: 30, 
                borderWidth: 30,
                borderColor: 'red', 
                width: 54, 
                height: 54,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{ uri: organizationLogo }}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
            </View>
          ),
        },
      ];
    });
  });
  const renderItem = ({ item }) => <ListRowItem {...item} />;
  return <List data={data} renderItem={renderItem} />;
};
