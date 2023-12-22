import {StyleSheet, Text, View} from 'react-native';

const Page1 = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Page1</Text>
    </View>
  );
};

export default Page1;

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
});
