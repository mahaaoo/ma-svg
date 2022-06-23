import React from 'react';
import {View} from 'react-native';
import Svg, { Circle, Defs, G, Rect, Use } from 'react-native-svg';

interface UseExampleProps {
};

const UseExample: React.FC<UseExampleProps> = props => {
  const {} = props;

  return (
    <View>
      <Svg height="100" width="300">
        <Defs>
          <G id="shape">
            <G>
              <Circle cx="50" cy="50" r="50" />
              <Rect x="50" y="50" width="50" height="50" />
              <Circle cx="50" cy="50" r="5" fill="blue" />
            </G>
          </G>
        </Defs>
        <Use href="#shape" x="20" y="0" />
        <Use href="#shape" x="170" y="0" />
      </Svg>
    </View>
  )
};

export default UseExample;
