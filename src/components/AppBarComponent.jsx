import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const AppBarComponent = () => (
 <Appbar style={styles.bottom}>
   <Appbar.Action
     icon="archive"
     onPress={() => console.log('Pressed archive')}
    />
    <Appbar.Action styles={styles.icon} icon="watch" onPress={() => console.log('Pressed mail')} />
    <Appbar.Action styles={styles.icon} icon="account-box-outline" onPress={() => console.log('Pressed label')} />
    <Appbar.Action styles={styles.icon}
      icon="chart-line-variant"
      onPress={() => console.log('Pressed delete')}
    />
  </Appbar>
 );

export default AppBarComponent

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#8c263f',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    color: 'white',
  },
});