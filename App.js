import React from 'react';
// import { Navigator } from 'react-native';
import { Text, StyleSheet, View } from 'react-native';
import GymClasses from './src/GymClasses'

// const RouteMapper = (route, navigator) => {
//   if (route.name === 'gymclasses') {
//     return <GymClasses navigator={navigator} />;
//   }
// };

// export default class App extends Component {
//   render() {
//     return (
//       <Navigator
//         initialRoute={{ name: 'gymclasses' }}
//         configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
//         renderScene={RouteMapper}
//       />
//     );
//   }
// }

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <GymClasses />
      
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'white',
    alignItems: 'flex-start',
    // justifyContent: 'center',
    padding:20,
  },
});

