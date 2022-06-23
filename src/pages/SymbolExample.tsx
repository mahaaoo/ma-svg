import React from 'react';
import {View} from 'react-native';
import Svg, { Circle, Symbol, Use } from 'react-native-svg';

interface SymbolExampleProps {
};

const SymbolExample: React.FC<SymbolExampleProps> = props => {
  const {} = props;

  return (
    <View>
      <Svg height="150" width="110">
        <Symbol id="symbol" viewBox="0 0 150 110" width="100" height="50">
          <Circle cx="50" cy="50" r="40" strokeWidth="8" stroke="red" fill="red" />
          <Circle
            cx="90"
            cy="60"
            r="40"
            strokeWidth="8"
            stroke="green"
            fill="white"
          />
        </Symbol>

        <Use href="#symbol" x="0" y="0" />
        <Use href="#symbol" x="0" y="50" width="75" height="38" />
        <Use href="#symbol" x="0" y="100" width="50" height="25" />
      </Svg>
    </View>
  )
};

export default SymbolExample;
