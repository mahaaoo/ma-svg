import React from 'react';
import {View} from 'react-native';
import Svg, { Polyline } from 'react-native-svg';

interface PolylineExampleProps {
};

const PolylineExample: React.FC<PolylineExampleProps> = props => {
  const {} = props;

  return (
    <View>
      <Svg height="100" width="100">
        <Polyline
          points="10,10 20,12 30,20 40,60 60,70 95,90"
          fill="none"
          stroke="black"
          strokeWidth="3"
        />
      </Svg>
    </View>
  )
};

export default PolylineExample;
