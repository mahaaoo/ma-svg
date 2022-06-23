import React from 'react';
import {View} from 'react-native';
import Svg, { Defs, Pattern, Path, Rect, Ellipse } from 'react-native-svg';

interface PatternExampleProps {
};

const PatternExample: React.FC<PatternExampleProps> = props => {
  const {} = props;

  return (
    <View>
      <Svg width="100%" height="100%" viewBox="0 0 800 400">
        <Defs>
          <Pattern
            id="TrianglePattern"
            patternUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="100"
            height="100"
            viewBox="0 0 10 10"
          >
            <Path d="M 0 0 L 7 0 L 3.5 7 z" fill="red" stroke="blue" />
          </Pattern>
        </Defs>
        <Rect fill="none" stroke="blue" x="1" y="1" width="798" height="398" />
        <Ellipse
          fill="url(#TrianglePattern)"
          stroke="black"
          strokeWidth="5"
          cx="400"
          cy="200"
          rx="350"
          ry="150"
        />
      </Svg>
    </View>
  )
};

export default PatternExample;
