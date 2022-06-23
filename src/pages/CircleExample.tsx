import React from 'react';
import {View} from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface CircleExampleProps {
};

const CircleExample: React.FC<CircleExampleProps> = props => {
  const {} = props;

  return (
    <View>
      <Svg height="100" width="100">
        <Circle cx="50" cy="50" r="50" fill="pink" />
      </Svg>
      <Svg height="200" width="200">
        <Circle cx="100" cy="100" r="100" stroke="black" strokeDasharray={'5 5'} />
      </Svg>
    </View>
  )
};

export default CircleExample;
