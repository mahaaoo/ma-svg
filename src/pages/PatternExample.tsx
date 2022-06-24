import React from 'react';
import {Dimensions, View} from 'react-native';
import Svg, { Defs, Pattern, Path, Rect, Text } from 'react-native-svg';

const {width, height} = Dimensions.get('window');

interface PatternExampleProps {
};

const PatternExample: React.FC<PatternExampleProps> = props => {
  const {} = props;

  return (
    <View>
      <Svg width="100%" height="100%">
        <Defs>
          <Pattern
            id="TrianglePattern"
            patternUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="150"
            height="150"
          >
            <Text
              rotation="-50" origin="100, 50"
              fill="none"
              stroke="#D8D8D8"
              fontSize="20"
              fontWeight="bold"
              x="0"
              y="20"
              textAnchor="start"
            >
              mahaaoo
            </Text>
          </Pattern>
        </Defs>
        <Rect 
          fill="url(#TrianglePattern)" x="0" y="0" width={width} height={height} />
        {/* <Ellipse
          fill="url(#TrianglePattern)"
          stroke="black"
          strokeWidth="5"
          cx="400"
          cy="200"
          rx="350"
          ry="150"
        /> */}
      </Svg>
    </View>
  )
};

export default PatternExample;
