import React from 'react';
import {View} from 'react-native';
import Svg, { Defs, Ellipse, RadialGradient, Stop } from 'react-native-svg';

interface RadialGradientExampleProps {
};

const RadialGradientExample: React.FC<RadialGradientExampleProps> = props => {
  const {} = props;

  return (
    <View>
      <Svg height="150" width="300">
        <Defs>
          <RadialGradient
            id="grad"
            cx="150"
            cy="75"
            rx="85"
            ry="55"
            fx="150"
            fy="75"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0" stopColor="#ff0" stopOpacity="1" />
            <Stop offset="1" stopColor="#83a" stopOpacity="1" />
          </RadialGradient>
        </Defs>
        <Ellipse cx="150" cy="75" rx="85" ry="55" fill="url(#grad)" />
      </Svg>
    </View>
  )
};

export default RadialGradientExample;
