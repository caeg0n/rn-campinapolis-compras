import React from 'react';
import { DeliveryTime } from './DeliveryTime';
import { DeliveryStep } from './DeliveryStep';
import { DriverInformation } from './DriverInformation';
import { Divider, Box, Button } from '@src/components/elements';
import { useExploreStackNavigation } from '@src/hooks';
//import { DeliveryMapView } from './DeliveryMapView';

export const TrackOrder = ({ route }) => {
  const { category, orderId } = route.params;
  const navigation = useExploreStackNavigation();
  //const [isMapViewVisible, setIsMapViewVisible] = React.useState(false);

  const onCancel = () => {
    navigation.navigate('Explore');
  };

  const onMapViewButtonPress = () => {
    setIsMapViewVisible(!isMapViewVisible);
  };

  return (
    <Box flex={1}>
      <Box flex={1}>
        <Box>
          <DeliveryTime />
          <Divider />
          {/* <DriverInformation /> */}
        </Box>
        <DeliveryStep orderId={orderId} category={category} />
      </Box>
      <Box
        width="100%"        
        paddingHorizontal="m"
        backgroundColor="card">
        <Button
          label={'Detalhes do Pedido'}
          isFullWidth
          paddingVertical="m"
          onPress={onMapViewButtonPress}
        />
        {/* <Button
          label="Cancelar pedido"
          isFullWidth
          variant="transparent"
          onPress={onCancel}
        /> */}
      </Box>
    </Box>
  );
};
