import React from 'react';
import {View} from 'react-native';
import Svg, {Text} from 'react-native-svg';

interface TextExampleProps {
};

const TextExample: React.FC<TextExampleProps> = props => {
  const {} = props;

  return (
    <View>
      <Svg height="60" width="200">
        <Text
          fill="none"
          stroke="purple"
          fontSize="20"
          fontWeight="bold"
          x="0"
          y="20"
          textAnchor="start"
        >
          STROKED TEXT
        </Text>
      </Svg>
    </View>
  )
};

export default TextExample;
