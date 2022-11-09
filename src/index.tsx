import * as React from 'react';
import { requireNativeComponent, StyleSheet } from 'react-native';

import { IMapboxNavigationProps } from './typings';

const MapboxNavigationDriving = (props: IMapboxNavigationProps) => {
  return <RNMapboxNavigation style={styles.container} {...props} />;
};

const RNMapboxNavigation = requireNativeComponent(
  'MapboxNavigationDriving',
  MapboxNavigationDriving
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapboxNavigationDriving;
