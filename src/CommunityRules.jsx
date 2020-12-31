import React from 'react';
import { ScrollView, Pressable, Text, View } from 'react-native';
import BGScreen from './BackgroundScreen';
import { primary_color } from './styles';

export default function CommunityRules({ navigation }) {
  return (
    <BGScreen statusBarStyle="dark-content">
      <ScrollView style={{ flex: 1, margin: 10, backgroundColor: '#fefefe', padding: 10 }}>
        <Text style={{ color: 'gray' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum eget urna ac lobortis. Proin vel pellentesque lectus. Donec et ullamcorper neque, vitae viverra ligula. Sed quis auctor magna, a pharetra tortor. Sed eget massa turpis. Donec accumsan ipsum nec maximus venenatis. Mauris venenatis elementum dolor, non sodales enim dapibus non. Integer ac dui congue, viverra elit venenatis, maximus erat. Cras dictum a eros eu dignissim. Sed sit amet est magna.

          In vehicula consequat pretium. Sed ac neque rutrum, varius leo sed, tincidunt odio. Proin nec velit maximus, lacinia dolor quis, vestibulum erat. Ut tincidunt, velit vel blandit tempor, metus velit commodo lacus, quis faucibus mi est ut velit. Sed quis auctor augue, et consectetur nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum ligula velit, at blandit libero euismod sit amet. Ut consectetur et quam ac vehicula. Fusce sit amet aliquam mauris. Morbi ullamcorper bibendum convallis.

          Sed tortor erat, placerat et rhoncus ac, venenatis eget ligula. Pellentesque enim eros, facilisis tristique consectetur vel, molestie ac dui. Integer posuere quam sed scelerisque pulvinar. Phasellus consequat tempus dolor, ut consequat mi vestibulum a. Vivamus aliquet neque vel ullamcorper laoreet. In ultrices in nunc sit amet molestie. Vestibulum consectetur consequat mollis. Phasellus gravida sem ut semper congue. Nunc gravida mattis tincidunt. Phasellus a malesuada sem. Duis ultrices vestibulum mauris ut tempor. Aenean dictum venenatis libero, nec euismod nibh tempor eget. Praesent laoreet, leo sagittis lobortis dictum, nisi velit dapibus ligula, a luctus magna magna et eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus vestibulum nisl in nulla egestas, vitae sagittis dui dictum.

          Quisque nec purus ac tellus dignissim mattis id vel turpis. Proin ultricies nisl vel elit sollicitudin varius. In hac habitasse platea dictumst. Quisque sit amet est sodales, tincidunt mi in, scelerisque mi. Proin at est sed arcu ornare sodales. Aenean non tempus velit. Aenean semper felis et turpis iaculis commodo. Morbi mauris libero, iaculis nec mi non, efficitur accumsan nisi. Donec semper ligula et ipsum consequat ultrices. Cras sollicitudin finibus leo id venenatis. Quisque ultrices finibus neque, vel auctor mauris finibus et. Nulla posuere purus neque, vitae mollis felis venenatis fermentum. Nullam laoreet vulputate lacus, eu semper justo ornare vel. Aenean leo dui, pulvinar ac odio vel, suscipit dapibus felis. Nullam faucibus ante ac erat commodo, id tempus mi mollis.

          Maecenas ornare neque neque, vulputate placerat neque tempus sit amet. Aenean quis eros non sapien scelerisque ornare quis in massa. Integer in posuere eros. Quisque bibendum nunc id dolor euismod congue. Quisque in ultrices lacus, maximus interdum velit. Vivamus risus ligula, pretium nec dapibus vel, pellentesque mollis sem. Aenean id elit condimentum, venenatis velit ac, ultricies nisi.
        </Text>
      </ScrollView>

      <View style={{ backgroundColor: 'gray', padding: 20, alignItems: 'center' }}>
        <Text style={{ color: 'white', textAlign: 'center', marginBottom: 22 }}>
          By proceeding you also agree to the Terms of Service and Privacy Policy.
        </Text>

        <Pressable 
          style={{ alignItems: 'center', borderRadius: 12, backgroundColor: primary_color, padding: 15, width: '100%' }}
          onPress={() => navigation.navigate('Subscribe')}
        >
          <Text style={{ color: 'white', fontSize: 16 }}>Continue</Text>
        </Pressable>
      </View>
    </BGScreen>
  );
}
