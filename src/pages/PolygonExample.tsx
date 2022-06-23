import React from 'react';
import {View} from 'react-native';
import Svg, { Polygon } from 'react-native-svg';

interface PolygonExampleProps {
};

const PolygonExample: React.FC<PolygonExampleProps> = props => {
  const {} = props;

  return (
    <View>
      <Svg height="100" width="100">
        <Polygon
          points="40,5 70,80 25,95"
          fill="lime"
          stroke="purple"
          strokeWidth="1"
        />
      </Svg>
    </View>
  )
};

export default PolygonExample;
