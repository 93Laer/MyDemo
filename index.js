import { AppRegistry } from 'react-native';
const  app_key='MyDemo';//这个名字必须和我们工程的名字要一样


/*import App from './App';
AppRegistry.registerComponent('MyDemo', () => App);*/


import HomePager from './HomePager.js'
AppRegistry.registerComponent(app_key,()=>HomePager)

