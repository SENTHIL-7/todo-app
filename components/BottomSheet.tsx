import { View, Text, Button ,StyleSheet} from 'react-native'
import React, { useEffect } from 'react'
import { ThemedView } from './ThemedView'
import { ThemedText } from './ThemedText'
import Animated ,{useSharedValue ,useAnimatedStyle, withTiming} from 'react-native-reanimated'

export default function BottomSheet({onClose}:any) {
const height = useSharedValue(500);

useEffect(() => {
  height.value=withTiming(500)  
},[])
const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
})
const handleClose = () => {
    onClose();
}
  return (
    <Animated.View style={[{position:'absolute',bottom:0,width:'100%',backgroundColor:'gray',height:animatedStyle.height}]}>
        <ThemedView style={styles.container}>
        <Button title="Close" onPress={handleClose}></Button>
        <ThemedText>BottomSheet</ThemedText>
        </ThemedView>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
    container:{
        // position:'absolute',
        // bottom:0,
        // width:'100%',
        // backgroundColor:'gray',
        // height:300
    }
})