import React from "react"
import { ScrollView } from "react-native"
import { activityHistoryDetail } from "@src/data/mock-activity-history"
import { Divider, Box, Icon, Button, ListRowItem, Image } from "@src/components"
import { OrderSummary } from "./OrderSummary"
//import { fontSize, useAppTheme } from "@src/theme"
//import StepIndicator from "react-native-step-indicator"

function filterData(sourceParam, targetData) {
  const [reference, organizationId] = sourceParam.split('-');
  const result = [];
  if (targetData.hasOwnProperty(reference)) {
      const referenceData = targetData[reference];
      if (referenceData.hasOwnProperty(organizationId)) {
          result.push(referenceData[organizationId]);
      }
  }
  return result[0];
}

export const DeliveryDetail = ({orders,orderId}) => {

  return (
    <ScrollView>
      <OrderSummary cartItem={filterData(orderId,orders)} />
      <Divider />
      <ListRowItem
        title={activityHistoryDetail.restaurantName}
        note={`Booking ID: ${activityHistoryDetail.bookingId}`}
        subTitle={`Status: ${activityHistoryDetail.status}`}
        leftElement={
          <Image
            source={require("@src/assets/common/food.png")}
            width={30}
            height={30}
          />
        }
      />
      <Divider />
    </ScrollView>
  )
}