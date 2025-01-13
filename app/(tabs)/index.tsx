import BottomSheet from '@/components/BottomSheet';
import DashBoard from '@/components/DashBoard';
import { ThemedText } from '@/components/ThemedText';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text,View ,Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [showEditor, setShowEditor] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
    {/* <View > */}
    {/* <StatusBar translucent={false} backgroundColor="#fff" /> */}
    <DashBoard ></DashBoard>
    
    {
      showEditor?<BottomSheet onClose={() => setShowEditor(!showEditor)}></BottomSheet>:<Button title="Show Editor" onPress={() => setShowEditor(!showEditor)}/>
    }
    
     {/* </View> */}
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  button:{
    width:200
  }
});
