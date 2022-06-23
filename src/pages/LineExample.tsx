import React from 'react';
import {View} from 'react-native';
import Svg, { Line } from 'react-native-svg';

interface LineExampleProps {
};

const LineExample: React.FC<LineExampleProps> = props => {
  const {} = props;

  return (
    <View>
      <Svg height="100" width="100">
        <Line x1="0" y1="0" x2="100" y2="100" stroke="red" strokeWidth="2" />
      </Svg>
    </View>
  )
};

export default LineExample;
