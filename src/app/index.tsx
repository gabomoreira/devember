import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';

import { Inter_900Black, useFonts } from '@expo-google-fonts/inter';
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';
import { useEffect } from 'react';
import { DayListItem } from '../components/core/DayLIstItem';

SplashScreen.preventAutoHideAsync();

const days = [...Array(24)].map((value, i) => i + 1)

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    Amatic: AmaticSC_400Regular, 
    AmaticBold: AmaticSC_700Bold
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
       SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError])


  if (!fontsLoaded && !fontError) {
    return null
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <FlatList 
        data={days}
        keyExtractor={(i) => String(i)}
        renderItem={({item}) => (
         <DayListItem key={item} day={item} />
        )}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
      />
    </View>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: '#fff',
  },
  content: {
    gap:10
  ,padding: 10
  },
  column: {
    gap:10
  },
});          
