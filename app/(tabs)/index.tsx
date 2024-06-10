
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@/app/screens/Home';
import Details from '@/app/screens/Details';
import Login from '@/app/screens/Login';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Details: { productId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function HomeScreen() {

  return (

    <Stack.Navigator initialRouteName='Home'>

      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
        
      /> */}

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Details"
        component={Details}
      />



    </Stack.Navigator>

  );
}

