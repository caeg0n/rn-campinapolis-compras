import React from 'react';
import { Box, TextField, Text, Button, Divider } from '@src/components';

export const ContactInformationForm = ({ profile }) => {
  return (
    <Box backgroundColor="card" padding="m">
      <TextField
        inputProps={{
          defaultValue: profile.name,
          textContentType: 'name',
        }}
      />
      <Divider backgroundColor="card" marginVertical="s" />
      <TextField
        inputProps={{
          defaultValue: profile.phone,
          textContentType: 'telephoneNumber',
        }}
      />
      <Divider backgroundColor="card" marginVertical="s" />
      <TextField
        inputProps={{
          defaultValue: profile.email,
          textContentType: 'emailAddress',
        }}
      />
      <Text variant="secondary" marginTop="xs" marginBottom="m">
        Communications and transaction history will be sent to this email
        address
      </Text>
      <Button label="Save" isFullWidth />
    </Box>
  );
};
