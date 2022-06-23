import React from 'react';
import {View} from 'react-native';
import Svg, { Defs, G, Path, TextPath, TSpan, Text } from 'react-native-svg';

interface TextPathExampleProps {
};

const TextPathExample: React.FC<TextPathExampleProps> = props => {
  const {} = props;

  const path = 'M 10 10 L 100 10 L 150 50'

  return (
    <View>
      <Svg height="100" width="200">
        <Defs>
          <Path id="path" d={path} />
        </Defs>
        <G y="20">
          <Text fill="blue">
            <TextPath href="#path" startOffset="-10%">
              We go up and down,
              <TSpan fill="red" dy="5,5,5">
                then up again
              </TSpan>
            </TextPath>
          </Text>
          <Path d={path} fill="none" stroke="red" strokeWidth="1" />
        </G>
      </Svg>
    </View>
  )
};

export default TextPathExample;
