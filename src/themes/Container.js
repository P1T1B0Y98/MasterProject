import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import { Size, Color } from '../constants';

export default ({ children, backgroundColor, ...props }) => {
  const theme = {
    flex: 1,
    width: Size.deviceWidth,
    backgroundColor: Color.white,
  };
  console.warn("Whats going on here?");

  const contentStyle = StyleSheet.flatten([
    {
      flex: 1,
      backgroundColor,
    },
  ]);

  ("Jeg er her nå i Container.js");
  return (
    <SafeAreaView style={theme}>
      <View style={contentStyle}>{children}</View>
    </SafeAreaView>
  );
};
