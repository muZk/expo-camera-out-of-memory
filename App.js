import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Camera } from 'expo-camera';

export default function App() {
  const camera = React.useRef(null)
  const [hasCameraPermission, setHasCameraPermission] = React.useState(false)

  React.useEffect(() => {
    Camera.requestPermissionsAsync().then((permissionResponse) => {
      setHasCameraPermission(permissionResponse?.status === 'granted')
    })
  }, [])

  const takePicture = () => {
    camera.current.takePictureAsync().then(console.log)
  };

  return (
    <View style={styles.container}>
      {hasCameraPermission ? (
        <>
          <Camera
            ref={camera}
            pictureSize="3264x2448"
            ratio="4:3"
            style={{ flex: 1 }}
            onCameraReady={() => takePicture()}
          />
        </>
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
