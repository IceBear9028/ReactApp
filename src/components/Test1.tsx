import {Button, StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';

interface Test1Type {
  title: string;
  text: string;
}

const Test1 = (props: Test1Type) => {
  const [state, setState] = useState<boolean>(true);
  function clickEvent() {
    setState(prev => !prev);
  }
  return (
    <View style={Test1Style.container}>
      <Button title={'Click'} onPress={clickEvent} />
      {state && <Text style={Test1Style.text}>ㅋㅋ 병신들</Text>}
      <Text style={Test1Style.title}>{props.title}</Text>
      <Text style={Test1Style.title}>{props.text}</Text>
    </View>
  );
};

export default Test1;

const Test1Style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#dfdfdf',
  },
  title: {
    fontSize: 14,
  },
  text: {
    fontSize: 18,
  },
});
