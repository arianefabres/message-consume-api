import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AllMessages from '../screens/AllMessagesScreen';
import MessageScreen from '../screens/MessageScreen';

const MessageNavigator = createStackNavigator(
  {
    AllMessages: AllMessages,
    MessageScreen: MessageScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#54c242',
      },
      headerTintColor:'black',
      headerTitle: 'Messages',
      headerTitleAlign: 'center'
    }
  }
);

export default createAppContainer(MessageNavigator);
