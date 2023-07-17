import React from 'react';
import { Box, PlaceListItem } from '@src/components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllClosedOrganizations } from '@src/redux/actions';

export const NewTab = () => {
  const dispatch = useDispatch();
  const { all_closed_organizations } = useSelector(
    (state) => state.userReducer,
  );

  useEffect(() => {
    const s = async () => {
      await dispatch(getAllClosedOrganizations());
    };
    s();
  }, [dispatch]);

  return (
    <Box backgroundColor="card" padding="s" paddingTop="none">
      {all_closed_organizations.map((item) => {
        return <PlaceListItem key={item.id} data={item} />;
      })}
    </Box>
  );
};
