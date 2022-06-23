import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from './pages/index';

export type RootStackParamList = {
  ComponentScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC<{}> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ComponentScreen"
        component={Index}
        options={{ headerTitle: 'Component List' }}
      />
    </Stack.Navigator>
  );
}


export default App;