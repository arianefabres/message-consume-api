import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type MessageProps = {
  navigation: any;
  subject: string;
};

export default function Message(props: MessageProps) {
  const messageDetail = props.navigation.getParam('detail');
  return (
    <View style={styles.container}>
      <View style={styles.messageWrap}>
        <Text style={styles.message}>
          {messageDetail}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfd1d1',
  },
  messageWrap: {
    margin: 15,
    padding: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#ececec',
  },
  message: {
    justifyContent: 'center',
    alignContent:'center',
    fontSize: 16
  }
});