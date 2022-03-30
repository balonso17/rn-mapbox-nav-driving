import * as React from 'react';
import { requireNativeComponent, StyleSheet } from 'react-native';

import { IMapboxNavigationProps } from './typings';

const MapboxNavigationBicycling = (props: IMapboxNavigationProps) => {
  return <RNMapboxNavigation style={styles.container} {...props} />;
};

const RNMapboxNavigation = requireNativeComponent(
  'MapboxNavigationBicycling',
  MapboxNavigationBicycling
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapboxNavigationBicycling;
