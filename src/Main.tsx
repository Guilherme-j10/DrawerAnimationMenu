import React, { useContext, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { StyleMain } from './styleMain';
import { Screen } from './Screen';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { OptionsMenuContext } from './context/Options';

export const Main = () => {

  const MenuOption = useContext(OptionsMenuContext);
  const TimingDefault = 300;

  const ScaleTransition = useSharedValue(1);
  const RightMoviment = useSharedValue(0);
  const BorderTransaction = useSharedValue(0);

  const AnimatedContainer = useAnimatedStyle(() => {
    return{
      transform: [{ scale: ScaleTransition.value }],
      right: RightMoviment.value,
      borderRadius: BorderTransaction.value
    };
  });

  useEffect(() => {
    if(MenuOption.getter){
      ScaleTransition.value = withTiming(.8, { duration: TimingDefault });
      RightMoviment.value = withTiming(-250, { duration: TimingDefault });
      BorderTransaction.value = withTiming(15, { duration: TimingDefault });
      return;
    }

    ScaleTransition.value = withTiming(1, { duration: TimingDefault });
    RightMoviment.value = withTiming(0, { duration: TimingDefault });
    BorderTransaction.value = withTiming(0, { duration: TimingDefault });
  }, [ MenuOption.getter ])

  return(
    <View style={StyleMain.MainContainer}>
      <View style={StyleMain.ContainerContent}>
        <TouchableOpacity onPress={() => MenuOption.setter(false)}>
          <Text style={{color: '#fff'}}>Close Menu</Text>
        </TouchableOpacity>
      </View>

      <Animated.View style={[ AnimatedContainer, StyleMain.ComponentViewer]}>
        <Screen />
      </Animated.View>
    </View>
  );
}
