import { SafeAreaView, ActivityIndicator, View, StatusBar } from 'react-native';
import { styles } from './styles';
import { useFonts } from 'expo-font';
import RootNavigator from './navigation';
import { Provider } from 'react-redux';
import { store } from './store';
import { COLORS } from './themes';
import { init } from './db';

init()
  .then(() => {
    console.log('se inicio')
  })
  .catch((err) => {
    console.log('fallo')
  })

export default function App() {

  const [loaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Inter-Light': require('../assets/fonts/Inter-Light.ttf')
  })

  if(!loaded) {
    return  (
      <View style={styles.loaderContainer}>
        <ActivityIndicator/>
      </View>
    )
  }

  return (
    <Provider store={store} >
      <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor={COLORS.secundaryBackground}/>
          <RootNavigator />
      </SafeAreaView>
    </Provider>
  );
}