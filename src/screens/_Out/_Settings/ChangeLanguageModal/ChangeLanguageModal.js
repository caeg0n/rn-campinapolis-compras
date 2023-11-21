import { BottomSheetModal, Box, RadioButton, Text } from '@src/components';
import React from 'react';

const languageOptions = [
  {
    label: 'English',
    value: 'english',
  },
  {
    label: 'Vietnamese',
    value: 'vietnamese',
  },
  {
    label: 'French',
    value: 'French',
  },
];

export const ChangeLanguageModal = ({ isVisible, hideModal }) => {
  const onItemPress = (item) => {
    console.log('onItemPress -> item', item);
  };

  return (
    <BottomSheetModal
      isOpened={isVisible}
      useScrollView
      snapPoints={['40%']}
      onClose={hideModal}>
      <Box>
        <Text textAlign="center" variant="header">
          Change Appearance
        </Text>
        <Box marginTop="m">
          <RadioButton
            defaultValue={languageOptions[0].value}
            data={languageOptions}
            onItemPress={onItemPress}
          />
        </Box>
      </Box>
    </BottomSheetModal>
  );
};
