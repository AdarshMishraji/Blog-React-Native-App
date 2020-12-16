import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { BlogProvider } from './src/context/BlogContext';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import IndexScreen from './src/screens/IndexScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Create: CreateScreen,
    Edit: EditScreen
  },
  {
    initialRouteName:'Index',
    defaultNavigationOptions: {
      title:'Blog'
    },
  }
)

const App = createAppContainer(navigator);

export default () => { // used to wrap the stackNavigator inside a context.
  return <BlogProvider>
      <App/>
    </BlogProvider>
}