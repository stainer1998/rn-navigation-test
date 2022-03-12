import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen.js';
import DetailsScreen from './screens/DetailsScreen.js';
import CreatePostScreen from './screens/CreatePostScreen.js';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} options={{title: 'My Home'}}/>
        <Stack.Screen name='Details' component={DetailsScreen} initialParams={{itemId: 42}}/>
        <Stack.Screen name='CreatePost' component={CreatePostScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
