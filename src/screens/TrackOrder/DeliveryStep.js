import React from 'react';
import StepIndicator from 'react-native-step-indicator';
import { fontSize, useAppTheme } from '@src/theme';
import { Box } from '@src/components';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { database } from '../../../firebaseConfig';

function findValueAsSecondElement(obj, param) {
  for (const [key, values] of Object.entries(obj)) {
    if (values[1] === param) {
      return true;
    }
  }
  return false;
}

function modifyKeysWithCategory(obj, category) {
  const newObj = {};
  Object.entries(obj).forEach(([key, value]) => {
    const newKey = key.startsWith('_') ? category + key : key;
    newObj[newKey] = value;
  });
  return newObj;
}

function replaceUnderscores(obj, category) {
  const newObj = {};
  Object.entries(modifyKeysWithCategory(obj, category)).forEach(
    ([key, value]) => {
      const newKey = key.replace(/_/g, ' ').trim();
      newObj[newKey] = value;
    },
  );
  return newObj;
}

function organizeKeysByFirstArrayElement(obj, category) {
  let response = [];
  Object.entries(replaceUnderscores(obj, category)).forEach(([key, value]) => {
    const position = value[0];
    response[position] = key;
  });
  return response.filter((element) => element !== undefined);
}

export const DeliveryStep = ({ category, orderId }) => {
  const { colors } = useAppTheme();
  const { order_status_list } = useSelector((state) => state.sessionReducer);
  //const { order_managed_status } = useSelector((state) => state.sessionReducer);
  const labels = organizeKeysByFirstArrayElement(order_status_list, category);
  const [statusNow, setStatusNow] = useState(1);

  useEffect(() => {
    const fieldToObserve = 'statusNow';
    observeOrderChanges(
      orderId,
      fieldToObserve,
      (statusValue) => {
        console.log(findValueAsSecondElement(order_status_list,statusValue[statusValue.length - 1]))
        setStatusNow(statusValue[statusValue.length - 2]);
      },
    );
  }, []);

  const observeOrderChanges = (orderId, fieldToObserve, callback) => {
    const collectionRef = collection(database, 'chats');
    const q = query(collectionRef, where('orderId', '==', orderId));
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data && data.hasOwnProperty(fieldToObserve)) {
            callback(data[fieldToObserve]);
          }
        });
      },
      (error) => {
        console.error('Error observing document: ', error);
      },
    );
    return unsubscribe;
  };

  const stepIndicatorStyles = {
    stepStrokeCurrentColor: colors.primary,
    separatorFinishedColor: colors.primary,
    separatorUnFinishedColor: colors.secondary,
    stepIndicatorFinishedColor: colors.primary,
    stepIndicatorUnFinishedColor: colors.border,
    stepIndicatorCurrentColor: colors.background,
    stepIndicatorLabelFontSize: fontSize.s,
    currentStepIndicatorLabelFontSize: fontSize.s,
    stepIndicatorLabelCurrentColor: colors.text,
    stepIndicatorLabelFinishedColor: 'white',
    stepIndicatorLabelUnFinishedColor: colors.text,
    labelColor: colors.text,
    labelAlign: 'flex-start',
    currentStepLabelColor: colors.primary,
    labelSize: fontSize.m,
  };

  return (
    <Box paddingHorizontal="m" flex={1}>
      <StepIndicator
        customStyles={stepIndicatorStyles}
        currentPosition={statusNow}
        labels={labels}
        direction="vertical"
        stepCount={labels.length}
      />
    </Box>
  );
};
