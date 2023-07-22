
import { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet,SafeAreaView} from 'react-native';
import { useFonts, Roboto_500Medium, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LandingPage from './screens/LandingPage';
import Register from './screens/Register';

SplashScreen.preventAutoHideAsync()

const Stack = createNativeStackNavigator()

export default function App() {
  let [fontsLoaded] = useFonts({
    'roboto-medium': Roboto_500Medium,
    'roboto-bold': Roboto_700Bold,
    'roboto-small': Roboto_400Regular
  })


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{flex: 1, marginTop: 20}} onLayout={onLayoutRootView} >
      <NavigationContainer >
        <Stack.Navigator 
          screenOptions={{
            headerStyle: { backgroundColor: '#fff' },
            headerTintColor: '#000',
            contentStyle: { backgroundColor: '#fff' },
          }} >
          <Stack.Screen  name="Home" component={LandingPage} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>

      </NavigationContainer>
    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    marginTop: 150,
    display: 'flex',
    justifyContent: 'center'

  },

});
