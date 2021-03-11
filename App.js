import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { RNCamera } from 'react-native-camera';

export default function App() {
  const camera = React.useRef(null)
  const [hasCameraPermission, setHasCameraPermission] = React.useState(true)

  const takePicture = () => {
    camera.current.takePictureAsync().then(console.log)
  };

  return (
    <View style={styles.container}>
      {hasCameraPermission ? (
        <RNCamera
          ref={camera}
          style={{ flex: 1 }}
          onCameraReady={() => takePicture()}
        />
      ) : (
        <Text>No camera permissions.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
