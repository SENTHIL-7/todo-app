import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  PanResponder,
} from 'react-native';
const { height } = Dimensions.get('window');
export default function TabTwoScreen() {
  const bottomSheetHeight = height * 0.5; // Bottom sheet height (50% of screen)
  const animation = useRef(new Animated.Value(height)).current; // Start off-screen

  // Function to open the Bottom Sheet
  const openBottomSheet = () => {
    Animated.timing(animation, {
      toValue: height - bottomSheetHeight, // Slide to visible position
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  // Function to close the Bottom Sheet
  const closeBottomSheet = () => {
    Animated.timing(animation, {
      toValue: height, // Slide out of view
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  // PanResponder to handle drag gestures
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        // Drag sheet with finger
        if (gestureState.dy > 0) {
          animation.setValue(height - bottomSheetHeight + gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        // Close the sheet if dragged down enough
        if (gestureState.dy > 100) {
          closeBottomSheet();
        } else {
          openBottomSheet();
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.openButton} onPress={openBottomSheet}>
        <Text style={styles.openButtonText}>Open Bottom Sheet</Text>
        <Text style={styles.openButtonText}>Open Bottom Sheet</Text>
      </TouchableOpacity>

      {/* Overlay for dismissal */}
      <TouchableOpacity
        style={[styles.overlay, { opacity: animation.interpolate({
            inputRange: [height - bottomSheetHeight, height],
            outputRange: [0.5, 0],
          }) }]}
        onPress={closeBottomSheet}
      />

      {/* Bottom Sheet */}
      <Animated.View
        style={[
          styles.bottomSheet,
          {
            height: bottomSheetHeight,
            transform: [{ translateY: animation }],
          },
        ]}
        {...panResponder.panHandlers}
      >
        <View style={styles.dragHandle} />
        <Text style={styles.sheetText}>This is a custom Bottom Sheet!</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  openButton: {
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  openButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
    zIndex: 1,
  },
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 2,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  dragHandle: {
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 2.5,
    alignSelf: 'center',
    marginVertical: 10,
  },
  sheetText: {
    fontSize: 16,
    textAlign: 'center',
  },
});
