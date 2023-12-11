
import DayListItem from '@components/core/DayLIstItem';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';


SplashScreen.preventAutoHideAsync();

const days = [...Array(24)].map((value, i) => i + 1)

export default function App() {
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
