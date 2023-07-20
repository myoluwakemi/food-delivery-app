import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen';
import {SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts, Roboto_500Medium , Roboto_400Regular ,Roboto_700Bold} from "@expo-google-fonts/roboto"
import LandingPage from './screens/LandingPage';

SplashScreen.preventAutoHideAsync()

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
    <View onLayout={onLayoutRootView} style=
      {styles.container} >
    <LandingPage/>
    </View>

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
