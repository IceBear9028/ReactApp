/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Page1 from './src/page/Page1.tsx';
import Test1 from './src/components/Test1.tsx';

const Stack = createNativeStackNavigator();

function Child1({navigation}: any) {
  return (
    <View>
      <Text>Child1</Text>
      <Button title={'이동'} onPress={() => navigation.navigate('child2')} />
    </View>
  );
}

function Child2() {
  const [state, setState] = useState<string>('');
  return (
    <View>
      <TextInput
        style={{height: 20, borderWidth: 1}}
        onChangeText={text => setState(text)}
        keyboardType={'default'}
      />
    </View>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'child1'}>
        <Stack.Screen name="child2" component={Child2} />
        <Stack.Screen name="child1" component={Child1} />
      </Stack.Navigator>
      <View style={styles.testStyle1}>
        <ScrollView>
          <Test1 title={'안녕하세요'} text={'반갑습니다.'} />
          <Test1 title={'안녕하세요'} text={'반갑습니다.'} />
          <Test1 title={'안녕하세요'} text={'반갑습니다.'} />
          <Test1 title={'안녕하세요'} text={'반갑습니다.'} />
          <Test1 title={'안녕하세요'} text={'반갑습니다.'} />
          <Test1 title={'안녕하세요'} text={'반갑습니다.'} />
          <Test1 title={'안녕하세요'} text={'반갑습니다.'} />
          <Test1 title={'안녕하세요'} text={'반갑습니다.'} />
          <Test1 title={'안녕하세요'} text={'반갑습니다.'} />
          <Test1 title={'안녕하세요'} text={'반갑습니다.'} />
        </ScrollView>
      </View>
      <View style={styles.testStyle1}></View>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  scrollStyle: {
    height: 400,
  },
  testStyle: {
    height: 400,
    backgroundColor: '#f3dede',
  },
  testStyle1: {
    height: 200,
    backgroundColor: '#f3dede',
  },
});
