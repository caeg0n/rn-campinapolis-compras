import React from 'react';
import { BottomSheetModal, Box, RadioButton, Text } from '@src/components';
import { ThemeContext } from '@src/theme';

const appearanceOptions = [
  {
    label: 'Dark',
    value: 'dark',
  },
  {
    label: 'Light',
    value: 'light',
  },
  {
    label: 'System',
    value: '',
  },
];

export const ChangeAppearanceModal = ({ isVisible, hideModal }) => {
  const { setTheme, theme, useSystemTheme, setUseSystemTheme } =
    React.useContext(ThemeContext);

  let defaultValue = theme;
  if (useSystemTheme) {
    defaultValue = null;
  }

  const onItemPress = (item) => {
    const selectedTheme = item.value;
    if (selectedTheme !== '') {
      setTheme(selectedTheme);
      setUseSystemTheme(false);
    } else {
      setTheme(null);
      setUseSystemTheme(true);
    }
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
            data={appearanceOptions}
            onItemPress={onItemPress}
            defaultValue={defaultValue || ''}
          />
        </Box>
      </Box>
    </BottomSheetModal>
  );
};
