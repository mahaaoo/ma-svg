import React from 'react';
import {View} from 'react-native';
import Svg, { Defs, Ellipse, LinearGradient, Stop } from 'react-native-svg';

interface LinearGradientExampleProps {
};

const LinearGradientExample: React.FC<LinearGradientExampleProps> = props => {
  const {} = props;

  return (
    <View>
      <Svg height="150" width="300">
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor="#FFD080" stopOpacity="1" />
            <Stop offset="1" stopColor="red" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Ellipse cx="150" cy="75" rx="85" ry="55" fill="url(#grad)" />
      </Svg>
    </View>
  )
};

export default LinearGradientExample;
