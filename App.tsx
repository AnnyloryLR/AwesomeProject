import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import MyText from './components/MyText/MyText';
import MyTextClassBased from './components/MyText/MyTextClassBased';
import { Alert, Text, View } from 'react-native';
import styles from './style';
import { useState} from 'react';

function App() {
  const [content, setContent] = useState('Hello and welcome!');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.header} >
          <Text style={styles.headerTitle}>
                          Home
          </Text>
        </View>
        <View style={styles.myContent}>
          <MyText title="My mobile app" fontSize={30} styles={styles.myText}
                  onPress= {() => Alert.alert('You clicked on My mobile app')}
          />
          <MyTextClassBased name={"Anny"} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Copyrights 2026</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
