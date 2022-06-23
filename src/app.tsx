import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from './pages/index';
import SvgExample from './pages/SvgExample';
import RectExample from './pages/RectExample';
import CircleExample from './pages/CircleExample';
import EllipseExample from './pages/EllipseExample';

export type RootStackParamList = {
  ComponentScreen: undefined;
  SvgExample: undefined;
  RectExample: undefined;
  CircleExample: undefined;
  EllipseExample: undefined;
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
    </Stack.Navigator>
  );
}


export default App;