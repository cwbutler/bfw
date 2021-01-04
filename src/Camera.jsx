import React, { useEffect, useRef, useState } from 'react';
import { Pressable, SafeAreaView, useWindowDimensions, View } from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';

export default function FullScreenCamera(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [isAvailable, setIsAvailable] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const { width, height } = useWindowDimensions();
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    const available = Boolean(cameraRef.current);
    if (isAvailable !== available) setIsAvailable(available);
  }, [cameraRef.current]);

  function toggleType() {
    setType(type === Camera.Constants.Type.back
      ? Camera.Constants.Type.front
      : Camera.Constants.Type.back);
  }

  return hasPermission ? (
    <Camera style={{ flexDirection: 'column', width, height }} type={type} ref={cameraRef}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, padding: 26 }}>
          <Pressable onPress={toggleType}>
            <MaterialIcons name="flip-camera-ios" size={36} color="white" />
          </Pressable>

          <Pressable 
            style={{ width: 75, height: 75, borderRadius: 75, borderWidth: 2, borderColor: 'white', alignItems: 'center', justifyContent: 'center' }}
            onPress={async () => {
              if (cameraRef.current) {
                const photo = await cameraRef.current.takePictureAsync();
                props.onCapture && props.onCapture(photo);
              }
            }}
          >
            <MaterialIcons name="camera" size={50} color="white" />
          </Pressable>

          <Pressable onPress={props.close}>
            <MaterialIcons name="cancel" size={36} color="white" />
          </Pressable>
        </View>
      </SafeAreaView>
    </Camera>
  ) : null;
}
