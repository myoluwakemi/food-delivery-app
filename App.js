import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useFonts, Roboto_500Medium} from "@expo-google-fonts/roboto"


export default function App() {
  let [fontsLoaded] = useFonts({
    'roboto-medium': Roboto_500Medium
  })
  if( !fontsLoaded){
    return null
  }
  return (
    <SafeAreaView style={styles.container}>
    
    <View style={styles.container}>
      <Image style={styles.landingLogo} source={require('./assets/images/landingLogo.png')}/>
      <Text style={styles.logoText}>OSHYNE FOODS</Text>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5F04',
    alignItems: 'center',
    justifyContent: 'center',
  },
  landingLogo: {
    width: 100,
    height: 100,
    objectFit: 'contain'
  },
  logoText: {
    fontFamily: 'roboto-medium',
    fontSize: 24,
    color: "#fff",
    marginTop: 18
  }
});
