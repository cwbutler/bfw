import React, { useState } from 'react';
import { Image, Modal, Pressable, Text, View } from 'react-native';
import defaultAvatar from '../assets/defaultProfile.png';
import Camera from './Camera';
import { primary_color } from './styles';

export default function Avatar(props) {
  const [showCamera, setShowCamera] = useState(null); 
  const [image, setImage] = useState(defaultAvatar);
  const [tempImage, setTempImage] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const source = (tempImage) ? { uri: tempImage } : image;
  const containerStyle = {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 2.5,
    borderColor: 'white'
  };

  function cancel() {
    setTempImage(undefined);
    setIsEditing(false);
    setShowCamera(false);
  }

  function save() {
    setImage({ uri: tempImage });
    setTempImage(undefined);
    setIsEditing(false);
  }

  return (
    <View style={[containerStyle, props.style]}>
      <Pressable onPress={() => setIsEditing(true)}>
        <Image source={image} style={{ width: '100%', height: '100%', borderRadius: 100 }} />
        <Modal visible={isEditing}>
          <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center' }}>
            <View style={{ paddingTop: 50, backgroundColor: primary_color, alignItems: 'center', alignSelf: 'stretch' }}>
              <Text style={{ fontSize: 16, color: 'white', paddingBottom: 12, paddingTop: 6, fontWeight: 'bold' }}>
                Select Picture
              </Text>
            </View>
            
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text style={{ color: 'white', marginTop: 36, fontSize: 20   }}>
                Edit profile picture
              </Text>
              <View style={[containerStyle, { width: 150, height: 150, marginTop: 30, marginBottom: 30 }]}>
                <Image source={source} style={{ width: '100%', height: '100%', borderRadius: 100 }} />
              </View>

              <View style={{ flexDirection: 'column' }}>
                <Pressable 
                  style={{ backgroundColor: primary_color, padding: 10, borderRadius: 12, width: 180, margin: 8 }}
                  onPress={() => setShowCamera(true)}
                >
                  <Text style={{ textAlign: 'center', color: 'white', fontSize: 16 }}>Take a Photo</Text>
                </Pressable>
                <Pressable style={{ backgroundColor: primary_color, padding: 10, borderRadius: 12, width: 180, margin: 8 }}>
                  <Text style={{ textAlign: 'center', color: 'white', fontSize: 16 }}>Choose a Photo</Text>
                </Pressable>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 50 }}>
                  <Pressable 
                    style={{ backgroundColor: (tempImage) ? primary_color : 'gray', padding: 10, borderRadius: 12, width: 82, margin: 8 }}
                    onPress={save}
                    disabled={!Boolean(tempImage)}
                  >
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 16 }}>Save</Text>
                  </Pressable>
                  <Pressable 
                    style={{ backgroundColor: 'lightgray', padding: 10, borderRadius: 12, width: 82, margin: 8 }}
                    onPress={cancel}
                  >
                    <Text style={{ textAlign: 'center', color: 'black', fontSize: 16 }}>Cancel</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View> 
          {showCamera && (
            <Camera 
              onCapture={(photo) => {
                setTempImage(photo.uri);
                setShowCamera(false);
              }} 
              close={() => setShowCamera(false)}
            />
          )}
        </Modal>
      </Pressable>
    </View>
  );
}
