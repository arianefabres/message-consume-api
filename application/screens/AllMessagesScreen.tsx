import * as React from 'react';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View} from 'react-native';
import Message from '../components/Message';
import get from '../messageAPI';

type Data = {
  id: number;
  timestamp: number;
  subject: string;
  detail: string;
}

type Item = {
  item: Data;
}

export default function AllMessages(props: any) {
  const [messages, setMessages] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {
    try {
      const data = await get();
      setIsLoading(false);
      return setMessages(data.messages);
    } catch (error) {
      console.log(error);
    }
  };

  const keyExtractor = (item: Data, index: number) => `${index}`;
  
  const ItemSeparatorComponent = () => <View style={styles.lineSeparator} />;
  
  const onPressMessage = (item: Data) => {
    return props.navigation.navigate({
      routeName: 'MessageScreen',
      params: {
        detail: item.detail,
        subject: item.subject,
      }
    });
  }

  const renderItem = (item: Item, index: number) => {
    return (
      <Message
        id={item.item.id}
        timestamp={item.item.timestamp}
        subject={item.item.subject}
        detail={item.item.detail}
        onPressMessage={()=> onPressMessage(item.item)}
      />
      // <Text>{item.item.timestamp}</Text>
      // <Text>tem.item.timestamp</Text>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onRefresh={getMessages}
        ItemSeparatorComponent={ItemSeparatorComponent}
        refreshing={isLoading}
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  lineSeparator: {
    height: 1,
    backgroundColor: '#E1E1E1',
  },
});
