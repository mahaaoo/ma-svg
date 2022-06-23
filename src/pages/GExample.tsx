import React from 'react';
import {View} from 'react-native';
import Svg, { G, Line, Rect, Text } from 'react-native-svg';

interface GExampleProps {
};

const GExample: React.FC<GExampleProps> = props => {
  const {} = props;

  return (
    <View>
      <Svg height="100" width="200">
        <G rotation="50" origin="100, 50">
          <Line x1="60" y1="10" x2="140" y2="10" stroke="#060" />

          <Rect x="60" y="20" height="50" width="80" stroke="#060" fill="#060" />

          <Text x="100" y="75" stroke="#600" fill="#600" textAnchor="middle">
            Text grouped with shapes
          </Text>
        </G>
      </Svg>
    </View>
  )
};

export default GExample;
