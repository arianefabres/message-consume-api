import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

type MessageProps = {
  id: number;
  timestamp: number;
  subject: string;
  detail: string;
  onPressMessage?: () => void;
};

const MessageSubject = styled.Text`
  font-size: 16px;
  font-weight:  ${(props: { read: boolean; }) => (props.read ? '400' : '600')};
  opacity: ${(props: { read: boolean; }) => (props.read ? 0.5 : 1)};
`;

export default function Message(props : MessageProps) {
  const [read, setRead] = useState(false);
  const [timestamp, setTimestamp] = useState(props.timestamp);

  useEffect(() => {
    const timeArray = timestamp.toString().split('T');
    setTimestamp(timeArray);
  }, []);

  const onPress = () => {
    setRead(true);
    props.onPressMessage && props.onPressMessage();
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={read ? styles.messageRead : styles.messageNotRead}>
        <View style={styles.subjectRow}>
          <View style={styles.subjectFlex}>
            <MessageSubject read={read}>{props.subject}</MessageSubject>
          </View>
          <View style={styles.timestamp}>
            <Text style={styles.timestampText}>{timestamp[1]}</Text>
            <Text style={styles.timestampText}>{timestamp[0]}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  subjectRow: {
    flexDirection: 'row', 
    justifyContent:'space-between', 
    padding: 20,
  },
  messageRead: {
    flex: 1, 
    backgroundColor: '#cfd1d1',
  },
  messageNotRead: {
    flex: 1, 
    backgroundColor: '#ececec',
  },
  subject: {
    fontSize: 16,
    fontWeight: '500'
  },
  subjectFlex: {
    flex: 0.75
  },
  timestamp: {
    flex: 0.25, 
    alignItems:'flex-end', 
    justifyContent:'center',
  },
  timestampText: {
    fontSize: 12,
  },
});