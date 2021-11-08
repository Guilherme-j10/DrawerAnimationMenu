import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleScreen } from './styleScreen';
import { OptionsMenuContext } from './context/Options';

export const Screen = () => {

  const MenuOptions = useContext(OptionsMenuContext);

  return(
    <View style={StyleScreen.MainContainer} >
      <TouchableOpacity onPress={() => MenuOptions.setter(true)}>
        <Text style={{color: '#333'}}>Open Menu</Text>
      </TouchableOpacity>
    </View>
  );
}
