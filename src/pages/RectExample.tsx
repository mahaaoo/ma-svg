import React from 'react';
import {View} from 'react-native';
import Svg, { Rect } from 'react-native-svg';

interface RectExampleProps {
};

const RectExample: React.FC<RectExampleProps> = props => {
  const {} = props;

  return (
    <View>
      <Svg width="200" height="60">
        <Rect
          x="25"
          y="5"
          width="150"
          height="50"
          fill="pink"
          strokeWidth="3"
          stroke="rgb(0,0,0)"
        />
      </Svg>
      <Svg width="200" height="100">
        <Rect
          x="25"
          y="5"
          width="100"
          height="80"
          stroke="rgb(0,0,0)"
        />
      </Svg>
      <Svg width="200" height="100">
        <Rect
          x="25"
          y="5"
          width="100"
          height="80"
          strokeWidth="3"
          stroke="rgb(0,0,0)"
          strokeDasharray={'15 10'}
        />
      </Svg>
      <Svg width="200" height="100" style={{ transform: [{
        rotateZ: '45deg'
      }]}}>
        <Rect
          x="25"
          y="5"
          width="100"
          height="80"
          stroke="rgb(0,0,0)"
        />
      </Svg>
    </View>
  )
};

export default RectExample;
