import React from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';
import GymClasses from './src/GymClasses';
import ConfirmIt from './src/ConfirmIt';
import {View} from 'react-native';
// import Navigator from 'react-native-navigator';


// export default class App extends React.Component {
//   render() {
//     return (
//       <View>
//     <GymClasses/> 
//     <ConfirmIt/>
//     </View>
//     );
//   }
// }

const RouteMapper = (route, navigator) => {
  if (route.name === 'gymclasses') {
    return <GymClasses navigator={navigator} />;
  } else if (route.name === 'confirmationnumber') {
  return (
    <ConfirmIt number={route.number} navigator={navigator} />
  );
}
};
export default class App extends React.Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'gymclasses' }}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
        renderScene={RouteMapper}
      />
    );
  }
}