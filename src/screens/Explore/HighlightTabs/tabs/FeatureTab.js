import React from 'react';
import { Box, PlaceListItem } from '@src/components';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';

export const FeaturedTab = () => {
  // const dispatch = useDispatch();
  const { all_opened_organizations } = useSelector(
    (state) => state.userReducer,
  );

  // useEffect(() => {
  //   const s = async () => {
  //     await dispatch(getAllOpenedOrganizations());
  //   };
  //   s();
  // }, [dispatch]);

  return (
    <Box backgroundColor="card" paddingTop="none">
      {all_opened_organizations.map((item) => {
        return <PlaceListItem key={item.id} data={item} />;
      })}
    </Box>
  );
};
