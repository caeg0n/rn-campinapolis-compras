import React from "react"
import { fontSize } from "@src/theme"
import { Box, Icon, RatingView, Text } from "../elements"

export const PlaceCardInfo = ({ data, ratingStarBackgroundColor }) => {
  const { distance, rating, time } = data

  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
    >
      <Box paddingBottom="xs">
        <RatingView
          value={rating}
          itemSize={16}
          readonly
          ratingStarBackgroundColor={ratingStarBackgroundColor}
        />
      </Box>
      <Box flexDirection="row">
        <Box
          flexDirection="row"
          borderWidth={1}
          borderColor="primary"
          alignItems="center"
          paddingHorizontal="s"
          paddingVertical="xxs"
          borderRadius="l"
          marginRight="s"
        >
          <Icon name="bicycle" size={fontSize.xs} isPrimary />
          <Text
            color="primary"
            marginLeft="xs"
            fontSize={fontSize.xs}
          >{`R$2,00`}</Text>
        </Box>
        <Box
          flexDirection="row"
          borderWidth={1}
          borderColor="primary"
          alignItems="center"
          paddingHorizontal="s"
          paddingVertical="xxs"
          borderRadius="l"
        >
          <Icon name="time-outline" size={fontSize.xs} isPrimary />
          <Text color="primary" marginLeft="xs" fontSize={fontSize.xs}>
            {/* {`fecha as ${time}'`} */}
            {`23:00`}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
