import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from './pages/index';
import SvgExample from './pages/SvgExample';
import RectExample from './pages/RectExample';
import CircleExample from './pages/CircleExample';
import EllipseExample from './pages/EllipseExample';
import LineExample from './pages/LineExample';
import PolylineExample from './pages/PolylineExample';
import PolygonExample from './pages/PolygonExample';
import TextExample from './pages/TextExample';
import TSpanExample from './pages/TSpanExample';
import TextPathExample from './pages/TextPathExample';

import GExample from './pages/GExample';
import UseExample from './pages/UseExample';
import SymbolExample from './pages/SymbolExample';

import ImageExample from './pages/ImageExample';
import ClipPathExample from './pages/ClipPathExample';
import LinearGradientExample from './pages/LinearGradientExample';
import RadialGradientExample from './pages/RadialGradientExample';
import MaskExample from './pages/MaskExample';
import PatternExample from './pages/PatternExample';

import ForeignObjectExample from './pages/ForeignObjectExample';

export type RootStackParamList = {
  ComponentScreen: undefined;
  SvgExample: undefined;
  RectExample: undefined;
  CircleExample: undefined;
  EllipseExample: undefined;
  LineExample: undefined;
  PolylineExample: undefined;
  PolygonExample: undefined;
  TextExample: undefined;
  TSpanExample: undefined;
  TextPathExample: undefined;
  GExample: undefined;
  UseExample: undefined;
  SymbolExample: undefined;
  ImageExample: undefined;
  ClipPathExample: undefined;
  LinearGradientExample: undefined;
  RadialGradientExample: undefined;
  MaskExample: undefined;
  PatternExample: undefined;
  ForeignObjectExample: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC<{}> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ComponentScreen"
        component={Index}
        options={{ headerTitle: 'Svg Demos' }}
      />
      <Stack.Screen
        name="SvgExample"
        component={SvgExample}
        options={{ headerTitle: 'SvgExample' }}
      />
      <Stack.Screen
        name="RectExample"
        component={RectExample}
        options={{ headerTitle: 'RectExample' }}
      />
      <Stack.Screen
        name="CircleExample"
        component={CircleExample}
        options={{ headerTitle: 'CircleExample' }}
      />
      <Stack.Screen
        name="EllipseExample"
        component={EllipseExample}
        options={{ headerTitle: 'EllipseExample' }}
      />
      <Stack.Screen
        name="LineExample"
        component={LineExample}
        options={{ headerTitle: 'LineExample' }}
      />
      <Stack.Screen
        name="PolylineExample"
        component={PolylineExample}
        options={{ headerTitle: 'PolylineExample' }}
      />
      <Stack.Screen
        name="PolygonExample"
        component={PolygonExample}
        options={{ headerTitle: 'PolygonExample' }}
      />
      <Stack.Screen
        name="TextExample"
        component={TextExample}
        options={{ headerTitle: 'TextExample' }}
      />
      <Stack.Screen
        name="TSpanExample"
        component={TSpanExample}
        options={{ headerTitle: 'TSpanExample' }}
      />
      <Stack.Screen
        name="TextPathExample"
        component={TextPathExample}
        options={{ headerTitle: 'TextPathExample' }}
      />
      <Stack.Screen
        name="GExample"
        component={GExample}
        options={{ headerTitle: 'GExample' }}
      />
      <Stack.Screen
        name="UseExample"
        component={UseExample}
        options={{ headerTitle: 'UseExample' }}
      />
      <Stack.Screen
        name="SymbolExample"
        component={SymbolExample}
        options={{ headerTitle: 'SymbolExample' }}
      />

      <Stack.Screen
        name="ImageExample"
        component={ImageExample}
        options={{ headerTitle: 'ImageExample' }}
      />
      <Stack.Screen
        name="ClipPathExample"
        component={ClipPathExample}
        options={{ headerTitle: 'ClipPathExample' }}
      />
      <Stack.Screen
        name="LinearGradientExample"
        component={LinearGradientExample}
        options={{ headerTitle: 'LinearGradientExample' }}
      />
      <Stack.Screen
        name="RadialGradientExample"
        component={RadialGradientExample}
        options={{ headerTitle: 'RadialGradientExample' }}
      />
      <Stack.Screen
        name="MaskExample"
        component={MaskExample}
        options={{ headerTitle: 'MaskExample' }}
      />
      <Stack.Screen
        name="PatternExample"
        component={PatternExample}
        options={{ headerTitle: 'PatternExample' }}
      />
      <Stack.Screen
        name="ForeignObjectExample"
        component={ForeignObjectExample}
        options={{ headerTitle: 'ForeignObjectExample' }}
      />
    </Stack.Navigator>
  );
}


export default App;