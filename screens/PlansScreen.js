import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default function PlansScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <ExpoConfigView />;
}

PlansScreen.navigationOptions = {
  title: 'app.json',
};
