import React from 'react';
import {View} from 'react-native';
import Svg, { TSpan, Text } from 'react-native-svg';

interface TSpanExampleProps {
};

const TSpanExample: React.FC<TSpanExampleProps> = props => {
  const {} = props;

  return (
    <View>
      <Svg height="160" width="200">
        <Text y="20" dx="5 5">
          <TSpan x="10">tspan line 1</TSpan>
          <TSpan x="10" dy="15">
            tspan line 2
          </TSpan>
          <TSpan x="10" dx="10" dy="15">
            tspan line 3
          </TSpan>
        </Text>
        <Text x="10" y="60" fill="red" fontSize="14">
          <TSpan dy="5 10 20">12345</TSpan>
          <TSpan fill="blue" dy="15" dx="0 5 5">
            <TSpan>6</TSpan>
            <TSpan>7</TSpan>
          </TSpan>
          <TSpan dx="0 10 20" dy="0 20" fontWeight="bold" fontSize="12">
            89a
          </TSpan>
        </Text>
        <Text y="140" dx="0 5 5" dy="0 -5 -5">
          delta on text
        </Text>
      </Svg>
    </View>
  )
};

export default TSpanExample;
