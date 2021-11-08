import { StyleSheet } from 'react-native';

export const StyleMain = StyleSheet.create({
  MainContainer: {
    width: '100%',
    backgroundColor: '#999',
    flex: 1
  },
  ComponentViewer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'absolute'
  },
  ContainerContent: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});