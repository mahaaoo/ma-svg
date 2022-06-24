import React from 'react';
import {ScrollView} from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface PathExampleProps {
};

const PathExample: React.FC<PathExampleProps> = props => {
  const {} = props;

  return (
    <ScrollView>
      <Svg height="100" width="100">
        <Path
          d="M25 10 L98 65 L70 25 L16 77 L11 30 L0 4 L90 50 L50 10 L11 22 L77 95 L20 25"
          fill="none"
          stroke="red"
        />
      </Svg>
      <Svg height="200" width="200">
        <Path
          d="M 10 10 C 20 20, 40 20, 50 10"
          fill="none"
          stroke="black"
        />
        <Path
          d="M 70 10 C 70 20, 110 20, 110 10"
          fill="none"
          stroke="black"
        />
        <Path
          d="M 130 10 C 120 20, 180 20, 170 10"
          fill="none"
          stroke="black"
        />
        <Path
          d="M 10 60 C 20 80, 40 80, 50 60"
          fill="none"
          stroke="black"
        />
        <Path
          d="M 70 60 C 70 80, 110 80, 110 60"
          fill="none"
          stroke="black"
        />
        <Path
          d="M 130 60 C 120 80, 180 80, 170 60"
          fill="none"
          stroke="black"
        />
        <Path
          d="M 10 110 C 20 140, 40 140, 50 110"
          fill="none"
          stroke="black"
        />
        <Path
          d="M 70 110 C 70 140, 110 140, 110 110"
          fill="none"
          stroke="black"
        />
        <Path
          d="M 130 110 C 120 140, 180 140, 170 110"
          fill="none"
          stroke="black"
        />
      </Svg>
      <Svg height="200" width="200">
        <Path
          d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
          fill="none"
          stroke="red"
        />
      </Svg>
      <Svg height="200" width="200">
        <Path
          d="M 10 80 Q 95 10 180 80"
          fill="none"
          stroke="red"
        />
      </Svg>
      <Svg height="200" width="200">
        <Path
          d="M 10 80 Q 52.5 10, 95 80 T 180 80"
          fill="none"
          stroke="red"
        />
      </Svg>
      <Svg height="325" width="325">
        <Path
          d="M 80 80
          A 45 45, 0, 0, 0, 125 125
          L 125 80 Z"
          fill="none"
          stroke="red"
        />
        <Path
          d="M 230 80
          A 45 45, 0, 1, 0, 275 125
          L 275 80 Z"
          fill="none"
          stroke="red"
        />
        <Path
          d="M 80 230
          A 45 45, 0, 0, 1, 125 275
          L 125 230 Z"
          fill="none"
          stroke="red"
        />
        <Path
          d="M 230 230
          A 45 45, 0, 1, 1, 275 275
          L 275 230 Z"
          fill="none"
          stroke="red"
        />
      </Svg>

    </ScrollView>
  )
};

export default PathExample;
