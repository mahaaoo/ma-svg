import React from 'react';
import {View} from 'react-native';
import Svg, { Ellipse } from 'react-native-svg';

interface EllipseExampleProps {
};

const EllipseExample: React.FC<EllipseExampleProps> = props => {
  const {} = props;

  return (
    <View>
      <Svg height="100" width="110">
        <Ellipse
          cx="55"
          cy="55"
          rx="50"
          ry="30"
          stroke="purple"
          strokeWidth="2"
          fill="yellow"
        />
      </Svg>
      <Svg height="200" width="200">
        <Ellipse
          cx="100"
          cy="100"
          rx="70"
          ry="90"
          stroke="purple"
          strokeWidth="2"
          fill="pink"
        />
      </Svg>
    </View>
  )
};

export default EllipseExample;
