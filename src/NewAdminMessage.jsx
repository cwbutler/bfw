import React,{ useContext, useRef, useState } from 'react';
import { Pressable, Text, TextInput, View, ScrollView, Platform, KeyboardAvoidingView, Linking } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { RichEditor, RichToolbar, actions } from 'react-native-pell-rich-editor';
import BGScreen from './BackgroundScreen';
import { primary_color } from './styles';
import { AWSUserContext } from './useAWSUser';
import { mailTo, pickImageFromGallery } from './utils';

export default function NewAdminMessage({ navigation }) {
  const user = useContext(AWSUserContext);
  const { control, handleSubmit, errors } = useForm();
  const editor = useRef();
  const [attachments, setAttachements] = useState([]);

  async function onPressAddImage() {
    const image = await pickImageFromGallery();
    if (!image.cancelled) {
      //const ext = /(?:\.([^.]+))?$/;  
      //editor.current?.insertImage(`data:image/${ext.exec(image.uri)[1]};base64,${image.base64}`, 'width: 100%;');
      setAttachements([...attachments, image.uri]);
    }
  }

  async function onSubmit(data) {
    const result = await mailTo({
      recipients: ['blackfamilywealthgroup@gmail.com'],
      subject: data.subject,
      body: data.message,
      isHtml: true,
      attachments
    });

    if (result === 'sent') {
      navigation.goBack();
    }
  }

  return (
    <BGScreen>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={90}
      >
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ flexDirection: 'row', padding: 10, borderColor: 'lightgrey', borderBottomWidth: 1 }}>
            <Text>To:</Text>
            <Text style={{ fontWeight: 'bold' }}> Admin</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 10, borderColor: 'lightgrey', borderBottomWidth: 1 }}>
            <Text>From:</Text>
            <Text style={{ fontWeight: 'bold' }}> {user.attributes.email}</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 10, borderColor: 'lightgrey', borderBottomWidth: 1 }}>
            <Text>Subject:</Text>
            <Controller
              name="subject"
              control={control}
              defaultValue=""
              render={({ onChange, onBlur, value }) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={text => onChange(text)}
                  value={value}
                  style={{ flex: 1, marginLeft: 6 }}
                />
              )}
            />
          </View>
          <ScrollView style={{ flex: 1, padding: 10 }}>
            <Controller
              name="message"
              control={control}
              defaultValue=""
              render={({ onChange, onBlur, value }) => (
                <RichEditor
                  ref={editor}
                  onBlur={onBlur}
                  onChange={text => onChange(text)}
                  placeholder="Type Message..."
                />
              )}
            />
          </ScrollView>
          <RichToolbar
            editor={editor}
            onPressAddImage={onPressAddImage}
            actions={[
              actions.keyboard,
              actions.insertImage,
              actions.setBold,
              actions.setItalic,
              actions.setUnderline,
              actions.setStrikethrough,
              actions.insertBulletsList,
              actions.insertOrderedList,
              actions.checkboxList,
              actions.insertLink,
              actions.undo,
              actions.redo
            ]}
          />
        </View>

        <View style={{ padding: 10 }}>
          <Pressable 
            style={{ backgroundColor: primary_color, padding: 14, borderRadius: 4 }}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
              Send message
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </BGScreen>
  );
}
